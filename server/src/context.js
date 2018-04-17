import data from './db/models';
import getUserId from './jwtAuth';

export default request => ({
  author_id: getUserId(request), // should come from the request for an authentified user
  models: data,
});

