const axios = require('axios')

module.exports = {

  auth: (req, res) => {
      axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, 
        {client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code: req.query.code,
            grant_type: 'authorization_code',
            redirect_uri: `http://${req.headers.host}/auth/callback`
        }).then( accessTokenResponse => {
          const accessToken = accessTokenResponse.data.access_token;
            // console.log('-------------accessToken', accessToken)
              return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessToken}`)
          .then( userInfoResponse => {
            // console.log('--------------------userInfoResponse', userInfoResponse.data)
              const userData = userInfoResponse.data;
                // console.log('-------- userData', userData );
                  req.session.user.name = userData.name
                  req.session.user.email = userData.email
                  req.session.user.cart = []
                  res.redirect('/');
            })
          }).catch( error => {
          res.status( 500 ).json({ message: 'something bad happened!' });
            console.log('Server error', error );
          })
  },
  logout: (req, res) => {
    req.session.destroy();
    res.send();
  }
}