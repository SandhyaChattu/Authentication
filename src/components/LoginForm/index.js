// Write your JS code here
import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {userName: '', password: ''}

  changePassword = event => this.setState({password: event.target.value})

  changeUsername = event => this.setState({userName: event.target.value})

  onSubmit = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const dbResponse = await response.json()
    console.log(dbResponse)
  }

  render() {
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />
        <div>
          <form onSubmit={this.onSubmit}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website login"
              className="logo-img"
            />
            <div>
              <label htmlFor="userName">USERNAME</label> <br />
              <input
                type="text"
                id="userName"
                onChange={this.changeUsername}
                placeholder="Username"
              />
              <br />
            </div>
            <div>
              <label htmlFor="password">PASSWORD</label> <br />
              <input
                type="password"
                id="password"
                onChange={this.changePassword}
                placeholder="Password"
              />
              <br />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Login
