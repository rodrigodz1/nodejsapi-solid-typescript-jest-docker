export default {
  jwt: {
    secret: process.env.APP_SECRET || 'segredo ssshhhhh.......',
    expiresIn: '1d',
  },
};
