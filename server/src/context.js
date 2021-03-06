import data from './db/models';
import getUserId from './jwtAuth';
import contactoLoader from './domainObjects/Contacto/dataloader';

export default request => ({
  author_id: getUserId(request), // should come from the request for an authentified user
  models: data,
  dataloaders: {
    ...contactoLoader(data),
  },
});

