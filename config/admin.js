module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f1dc2fbee7c1e2cd6bcd4918464bf173'),
  },
});
