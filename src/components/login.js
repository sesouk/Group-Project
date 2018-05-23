
const Login = () => {
      const callbackUrl = encodeURIComponent(window.location.origin + '/auth/callback')
      window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${callbackUrl}`
}

export default Login