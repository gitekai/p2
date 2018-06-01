import { PubSub } from 'graphql-subscriptions';
import { updateMutation, findAllWjoined, findByIdWjoined } from '../../utils/resolverUtils';
import { GraphQLError } from 'graphql';

const pubsub = new PubSub();

const createPersonaContacto = async (obj, args, context) =>
  context.models.sequelize.transaction(async (trans) => {
    const {
      emails,
      telefonos,
      direcciones,
      tipo,
      idPrefijo,
      ...contacto
    } = args.data;


    let createdContacto;

    try {
      //Creamos el Supertipo Contacto 
      createdContacto = await context.models.contactos.create({ tipo }, {
        transaction: trans,
        raw: true,
      });
      contacto.idContacto = createdContacto.id;
    } catch (e) {
      throw new Error('Error when creating Contacto');
    }

    // creamos la persona de contacto 
    const personaContactoPromise = context.models.personasContacto.create(contacto, {
      transaction: trans,
      raw: true,
    });

    // creamos los correos asociados
    const correosArrObj = (emails) ? emails.map(email => ({
      email,
      idContacto: createdContacto.id,
    })) : null;

    const correosPromise = (correosArrObj === null) ? [] :
      context.models.contactoCorreos.bulkCreate(
        correosArrObj,
        {     
          validate: true,
          transaction: trans,
          raw: true,
        },
      );

    // creamos las direcciones asociadas


    // creamos los telefonos
    const telefonosArrObj = (telefonos) ? telefonos.map(tel => Object.assign(
      tel,
      {
        idContacto: createdContacto.id,
      },
    )) : null;

    const telefonosPromise = (telefonosArrObj === null) ? [] :
      context.models.contactoTelefonos.bulkCreate(
        telefonosArrObj,
        {
          validate: true,
          transaction: trans,
        },
      );

    let personaContacto;
    try {
      [personaContacto] = await Promise.all([personaContactoPromise, correosPromise, telefonosPromise]);
    } catch (err) {
      throw new Error(`Could not resolve all Promises
     ${err}`);
    }

    pubsub.publish('contactAdded', createdContacto);

    return Object.assign(personaContacto.toJSON(),createdContacto.toJSON());
  });


const seqModel = 'personasContacto';

export const Query = {
  contactos: findAllWjoined(seqModel, 'contactos'),
  contacto: findByIdWjoined(seqModel, 'contactos'),
};

export const Mutation = {
  createPersonaContacto,
  modifyContacto: updateMutation(seqModel),
};

export const Subscription = {
  contactAdded: {
    subscribe: () =>
      pubsub.asyncIterator('contactAdded'),

    resolve: payload =>
      payload,
  },
};

export const PersonaContacto = {
  direcciones: (contacto, args, context) =>
    context.dataloaders.direccionesContactoLoader.load(contacto.id),
  telefonos: (contacto, args, context) =>
    context.dataloaders.telefonosContactoLoader.load(contacto.id),
  emails: (contacto, args, context) =>
    context.dataloaders.correosContactoLoader.load(contacto.id),
};
