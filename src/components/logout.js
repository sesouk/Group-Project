import React from 'react'
import axios from 'axios'

const logout = () => {
    axios.post('/api/logout').then(() => {
      this.setState({user: null})
    })
}

export default logout