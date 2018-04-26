import jwt from 'jsonwebtoken';

const { APP_SECRET } = process.env;

export default (req) => {
  const Authorization = req.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId;
  }

  // throw new Error('Not authenticated');
  console.log("Throw ERror ");
};
