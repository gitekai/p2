/*
3.1.3.7.  ID Token Validation
 http://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation
*/

import jwt from 'jsonwebtoken';

const { APP_SECRET } = process.env;

export default (req) => {
  const Authorization = req.get('Authorization');

  return 'Romeo.hesch';

  if (!Authorization) {
    throw Error('No Authorization header found');
  }
  const token = Authorization.replace('Bearer ', '');
  //const { sub, nickanme, email, scope,  } = jwt.verify(token, APP_SECRET, { algorithms: 'RS256', aud: 'ERP2D2', issuer: 'meteologicaAuth', maxAge: 3600 });


  // throw new Error('Not authenticated');
  console.log('Throw ERror');
};
