const config = require('../../config');
const Client = require('../../models/client');

module.exports.checkAdminAuth = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  Admin.findOne({ username: username })
    .then(admin => {
      bcrypt.compare(password, admin.password, (err, isMatched) => {
        if (!err) {
          if (isMatched) {
            const token = jwt.sign({ username: admin.username, role: config.role.ADMIN_ROLE }, config.secret.ADMIN, { expiresIn: '1d', algorithm: 'HS256' });
            res.status(200).json({
              isAuthenticated: true,
              token: token
            })
          } else {
            res.status(401).json({
              isAuthenticated: false,
              message: 'CREDS_INVALID'
            });
          }
        } else {
          res.status(500).json({
            isAuthenticated: false,
            message: 'INTERNAL_ERROR'
          });
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        isAuthenticated: false,
        message: 'INTERNAL_ERROR'
      });
    });
};


module.exports.verifyUser = async (req, res) => {
  const userId = req.params.userId
  Client.findById({ _id: userId }).exec()
    .then(client => {
      client.isVerified = true;
      await client.save();
      res.status(200).json({
        isSuccess: true
      });
    })
    .catch(err => {
      res.status(500).json({
        isSuccess: false,
        message: 'INTERNAL_ERROR'
      });
    });
}