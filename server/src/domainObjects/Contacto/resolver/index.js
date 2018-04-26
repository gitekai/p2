import { PubSub, withFilter } from 'graphql-subscriptions';
import { updateMutation, findAll, findById } from '../../../utils/resolverUtils';

const pubsub = new PubSub();

const createContacto = async (obj, args, context) =>
  context.models.sequelize.transaction(async (trans) => {
    const {
      emails,
      telefonos,
      direcciones,
      ...contacto
    } = args.data;

    let createdContacto;
    try {
      // creamos el contacto
      createdContacto = await context.models.contactos.create(contacto, {
        transaction: trans,
        raw: true,
      });
    } catch (e) {
      throw new Error(`ERROR llamando a contactos.create in createContacto
      ${e}`);
    }

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
    const direccionesArrObj = (direcciones) ? direcciones.map(direccion =>
      Object.assign(
        direccion,
        {
          idContacto: createdContacto.id,
        },
      )) : null;

    const direccionesPromise = (direccionesArrObj === null) ? [] :
      context.models.contactoDirecciones.bulkCreate(
        direccionesArrObj,
        {
          validate: true,
          transaction: trans,
        },
      );

    // creamos los telefonos
    const telefonosArrObj = (telefonos) ? telefonos.map(tel => Object.assign(
      tel,
      {
        idContacto: createdContacto.id,
        idPrefijo: 1,
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

    let retCorreos;
    let retTelefonos;
    let retDirecciones;
    try {
      [retCorreos, retTelefonos, retDirecciones] = await Promise.all([correosPromise, telefonosPromise, direccionesPromise]);
    } catch (err) {
      throw new Error(`Could not resolve all Promises
     ${err}`);
    }

    pubsub.publish('contactAdded', createdContacto);

    return createdContacto;
  });


const seqModel = 'contactos';

export const Query = {
  contactos: findAll(seqModel),
  contacto: findById(seqModel),
};

export const Mutation = {
  createContacto,
  modifyContacto: updateMutation(seqModel),
};

export const Subscription = {
  contactAdded: {
    subscribe: () => {
      return pubsub.asyncIterator('contactAdded');
    },
    resolve: (payload) => {
      return payload;
    }
  }
};

export const Contacto = {
  direcciones: (contacto, args, context) =>
    context.dataloaders.direccionesContactoLoader.load(contacto.id),
  telefonos: (contacto, args, context) =>
    context.dataloaders.telefonosContactoLoader.load(contacto.id),
  emails: (contacto, args, context) =>
    context.dataloaders.correosContactoLoader.load(contacto.id),

};
