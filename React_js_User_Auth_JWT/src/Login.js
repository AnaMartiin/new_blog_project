import React from 'react';
import RightSide from './Components/RightSide';
export default class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }
    componentDidMount() {

    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    handleSubmit = e => {
        let { username, password } = this.state
        e.preventDefault()
        fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {

                localStorage.setItem('authToken', JSON.stringify(responseJson.token))
                alert('Welcome back ' + responseJson.username)
                this.props.isLoggedIn(true)
            }).catch((e) => {

            })
    }

    render() {
        return (
            <div>
                <div>
                    <form
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        className="register_form ">
                        <input
                            onChange={this.handleChange}
                            name='username'
                            value={this.state.username}
                            placeholder="username"
                        />
                        <input
                            onChange={this.handleChange}
                            name='password'
                            value={this.state.password}
                            placeholder='password'
                        />
                        <button>Login</button>
                    </form>
                </div>
                <RightSide />
            </div>

        )
    }
}