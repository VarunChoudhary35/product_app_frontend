import React, { Component } from 'react';
import './styles.css'
class CompleteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            errors: {
                username: '',
                password: '',
                firstname: '',
                lastname: ''
            }
        }
        this.doValidation = this.doValidation.bind(this);
    }
    doValidation(event) {
//        console.log(event.target.name + "    " + event.target.value)
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'username':
                errors.username = value.length <= 0 ? 'Username must not be empty' : '';
                break;
            case 'password':
                errors.password = value.length <= 0 ? 'Password must not be empty' : '';
                break;
            case 'firstname':
                errors.firstname = value.length <= 0 ? 'First Name must not be empty' : '';
                break;
            case 'lastname':
                errors.lastname = value.length <= 0 ? 'Last Name must not be empty' : '';
                break;
            default:
                break;
        }
        this.setState({
            errors, [name]: value
        })
    }
    validateForm= (errors) =>{
        let valid=true;
        Object.values(errors).forEach(
            (element) => 
            element.length > 0 && (valid=false)            
        );

        return valid;
    }

    handleSubmit= (event) =>{
        event.preventDefault();
        if(this.validateForm(this.state.errors)){
            console.log("valid form "+ this.state.username+this.state.password+this.state.firstname+this.state.lastname)
        }else{
            console.log("invalid form" + this.state.errors)
        }
    }
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="form-wrapper">
                        <h3>User Registration</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="username">
                                <label>Username : </label>
                                <input type='text' name='username' onChange={this.doValidation}></input>
                                <div className="error"> {this.state.errors.username}</div>
                            </div>
                            <div className="password">
                                <label>Password : </label>
                                <input type='text' name='password' onChange={this.doValidation}></input>
                                <div className="error"> {this.state.errors.password}</div>
                            </div>
                            <div className="firstname">
                                <label>First Name : </label>
                                <input type='text' name='firstname' onChange={this.doValidation}></input>
                                <div className="error"> {this.state.errors.firstname}</div>
                            </div>
                            <div className="lastname">
                                <label>Last Name : </label>
                                <input type='text' name='lastname' onChange={this.doValidation}></input>
                                <div className="error"> {this.state.errors.lastname}</div>
                            </div>
                            <div className='submit'>
                                <input type="submit" value="Register"></input>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default CompleteForm;