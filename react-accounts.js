import React from 'react';


export class Register extends React.Component {
    registerWidthPassword(event) {
        event.preventDefault();
        var emailVar = this.refs.email.value.trim();
        var passwordVar = this.refs.password.value.trim();
        var pastwordAgainVar = this.refs.passwordAgain.value.trim();

        if (passwordVar != pastwordAgainVar) {
            console.log("Please right the passwords true");
            return;
        }

        Accounts.createUser({ email: emailVar, password: passwordVar }, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log(Meteor.userId());
            }
        });

    }

    loginWithGoogle() {
        Meteor.loginWithGoogle(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log(Meteor.userId());
            }
        });
    }




    render() {
        return (
            <div className="container form-signin">

                <input type="button" value="Loogin with Google" onClick={this.loginWithGoogle} className="btn btn-lg btn-primary btn-block" />


                <div className="at-sep">
                    <strong>OR</strong>
                </div>
                <form >
                    <h2 className="form-signin-heading">Sing Up</h2>
                    <input type="email" ref="email" name="email" className="form-control form-email" placeholder="Email address"  />
                    <input type="password" ref="password" name="password" className="form-control" placeholder="Password" />
                    <input type="password" ref="passwordAgain" name="passwordAgain" className="form-control" placeholder="Password Again"  />
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.registerWidthPassword.bind(this) }>Sign in</button>
                </form>
            </div >
        )
    }
}


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: Meteor.userId()
        };
    }

    loginWidthPassword(event) {
        event.preventDefault();
        console.log(this);
        var emailVar = this.refs.email.value.trim();
        var passwordVar = this.refs.password.value.trim();
        Meteor.loginWithPassword(emailVar, passwordVar, function (err) {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log(Meteor.userId());


            }
        });

      /*  this.setState({
            userId: Meteor.userId()
        });*/
    }

    loginWithGoogle() {
        Meteor.loginWithGoogle(function (err) {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log(Meteor.userId());
                console.log(this);
            }
        });

       /* this.setState({
            userId: Meteor.userId()
        });*/

    }


    render() {
        return (
            <div className="container form-signin">
                <input type="button" value="Login with Google" onClick={this.loginWithGoogle.bind(this) } className="btn btn-lg btn-primary btn-block" />


                <div className="at-sep">
                    <strong>OR</strong>
                </div>
                <form >
                    <h2 className="form-signin-heading">Sing In</h2>
                    <input type="email" ref="email" name="email" className="form-control form-email" placeholder="Email address"  />
                    <input type="password" ref="password" name="password" className="form-control" placeholder="Password" />
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.loginWidthPassword.bind(this) }>Sign in</button>
                </form>
            </div>
        )
    }
}


export class Logout extends React.Component {
    logOut() {
        Meteor.logout(function (err) {
            if (err) {

            } else {
                console.log(Meteor.userId());
            }
        });
    }

    render() {
        return (
            <div>
                <input type="button" value="Logout" onClick={this.logOut} className="btn btn-lg btn-primary btn-block" />
            </div>
        )
    }

}