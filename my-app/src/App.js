import React from "react"
import '../src/App.css';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        var name = props.name;
        var pas = props.pas;
        this.onNavigation = this.onNavigation.bind(this);

        // var pasIsValid = this.validatePas(pas);
        //var nameIsValid = this.validateName(name);
        this.state = { name: name, pas: pas, /*nameValid: nameIsValid, pasValid: pasIsValid*/ };

        /*this.onNameChange = this.onNameChange.bind(this);
        this.onPasChange = this.onPasChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);*/
    }

    /*validateName(name) {
        for (let i = 0; i < 10; i++) {
            let regexp = /[0-9]/;
            let regexp1 = /[а-яА-ЯёЁ]/;
            if (name.charAt(0).search(regexp) !== -1 || name.search(regexp1) !== -1) {
                // value = "";
                name = "";
                return false;
            } else {
                return true;
            }
        }
    }

    validatePas(pas) {
        for (let i = 0; i < 10; i++) {
            let regexp = /[^A-Z-a-z-0-9]/;
            if (pas.search(regexp) !== -1) {
                //value = "";
                return false;
            } else {
                return true;
            }
        }
    }

    onNameChange(e) {
        var val = e.target.value;
        var valid = this.validateName(val);
        this.setState({ name: val, nameValid: valid });
    }

    onPasChange(e) {
        var val = e.target.value;
        var valid = this.validatePas(val);
        this.setState({ pas: val, pasValid: valid });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.nameValid === true) {
            console.log("Имя пользователя: " + this.state.name);
            console.log("Пароль пользователя: " + this.state.pas);
        }
    }*/

    onNavigation(){
        const { history } = this.props;
        history.push('/card');
    }

    render() {
        return (
            <div className="background">
                <div className="form" onSubmit={this.handleSubmit} >
                    <div className="inputF">
                        <p>
                            <input type="text" className="inputForm" placeholder="Username" onChange={this.onNameChange} />
                        </p>
                        <p>
                            <input type="text" className="inputForm" placeholder="Password" onChange={this.onPasChange} />
                        </p>
                        <input type="submit" onClick={this.onNavigation} name="submit" className="clickSubmit" value="LOGIN"/>
                        <p className="inputText">Not registered? Create an account</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserForm;