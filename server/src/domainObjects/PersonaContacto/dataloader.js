import DataLoader from 'dataloader';
import genericLoader from '../../utils/loaderUtils';


const direccionesContacto = genericLoader('direccionesPersona', 'idPersonaContacto');
const telefonosContacto = genericLoader('contactoTelefonos', 'idContacto');
const correoContacto = genericLoader('contactoCorreos', 'idContacto', 'email');

export default models => ({
  direccionesContactoLoader: new DataLoader(direccionesContacto(models)),
  telefonosContactoLoader: new DataLoader(telefonosContacto(models)),
  correosContactoLoader: new DataLoader(correoContacto(models)),
});
