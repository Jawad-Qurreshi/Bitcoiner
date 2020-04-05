const config = require('../../config');
const Admin = require('../../models/admin');
const bcrypt = require('bcrypt')

module.exports.checkAdminAuth = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  Admin.findOne({username })
    .then(admin => {
      console.log(admin)
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
          console.log(err);
          res.status(500).json({
            isAuthenticated: false,
            message: 'INTERNAL_ERROR'
          });
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        isAuthenticated: false,
        message: 'INTERNAL_ERROR'
      });
    });
};


module.exports.verifyUser = (req, res) => {
  const userId = req.params.userId
  Client.findById({ _id: userId }).exec()
    .then(async client => {
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