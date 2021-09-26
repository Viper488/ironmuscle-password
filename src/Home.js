import React from "react";
import {changePassword} from "./Networking";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newPassword: undefined,
            confirmPassword: undefined
        };

        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        console.log('Component Mounted')
    }

    handleChangePassword(event) {
        this.setState({newPassword: event.target.value});
    }

    handleChangeConfirm(event) {
        this.setState({confirmPassword: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.props.match.params.id);
        let newPassword = this.state.newPassword;
        let confirmPassword = this.state.confirmPassword;

        if(newPassword === undefined) {
            alert('Password can not be empty')
        } else if (confirmPassword === undefined) {
            alert('Confirm password')
        } else if (newPassword !== confirmPassword) {
            alert('Passwords are different')
        } else {
            this.changePassword().then(undefined);
        }
        event.preventDefault();
    }

    changePassword = async () => {
        let token = this.props.match.params.id;
        let password = this.state.newPassword;

        await changePassword(token, password).then(response => {
            console.log(response.status)
            if(response.status === 200) {
                alert('Password changed you can now log in')
            } else {
                alert(response.data.message)
            }
        })
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        New password:<br/>
                        <input type="password" name="newPassword" value={this.state.newPassword} onChange={this.handleChangePassword}/>
                    </label>
                    <br/>
                    <label>
                        Confirm password:<br/>
                        <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChangeConfirm}/>
                    </label>
                    <br/>
                    <input type="submit" value="Change password"/>
                </form>
            </div>
        );
    }
}

export default Home
