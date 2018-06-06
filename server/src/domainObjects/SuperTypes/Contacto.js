export default class Contacto {

  constructor(db, tipo, transaction, telefonos = [], emails = []) {
    this.db = db;
    this.transaction = transaction;

    this.contacto = null;
    this.telefonos = null;
    this.emails = null;
  }

  async createContacto() {
    let contacto;
    try {
      contacto = await this.db.create({ tipo }, {
        transaction: transaction,
      });
      this.contacto = contacto.toJSON();
    } catch (e) {
      throw new Error('Error occured when creating Contacto');
    }
  }


  async createEmails(emails = []) {
    try {
      if (this.contacto === null) {
        await createContacto();
      }
      //añadimos el id del contacto a los correos
      emails.map(email => (
        {
          idContacto: this.contacto.id,
        }
      ));



    } catch (e) {
      throw new Error('Error occured in createEmails');
    }
  }


}

/*
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
  */