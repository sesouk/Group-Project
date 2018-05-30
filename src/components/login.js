

function Login(){
  localStorage.setItem('location', window.location.pathname)
  const local = localStorage.getItem('location')
  // axios.post('/api/sessionLocation', {local})

  const callbackUrl = window.location.origin + `${local}`
  console.log(callbackUrl);
  window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${callbackUrl}`
}


export default Login

