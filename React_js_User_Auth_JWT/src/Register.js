import React from 'react';
import RightSide from './Components/RightSide';


export default class Register extends React.Component {
    state = {
        username: '',
        password: ''
    }
    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    handleSubmit = e => {
        let { username, password } = this.state
        e.preventDefault()
        fetch('http://localhost:3001/users/register', {
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
                responseJson.error ? alert(responseJson.error) : localStorage.setItem('authToken', JSON.stringify(responseJson.token))

            }).catch((e) => {

            })
    }

    render() {
        return (
            <div>
                <form
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    className="register_form">
                    <input
                        name='username'
                        value={this.state.username}
                        placeholder="username"
                    />
                    <input
                        name='password'
                        value={this.state.password}
                        placeholder='password'
                    />
                    <button>Register</button>
                </form>
                <RightSide />
            </div>
        )
    }
}