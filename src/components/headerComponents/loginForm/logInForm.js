import React, {Component} from 'react';
import * as firebase from "firebase";


export default class LogIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          hasAccount: false,
          name: '',
          key: '',
          value: '',
        };
      }

componentDidMount() {
    const db = firebase.database();
    const name = db.ref('name');
    const nameFieldValue = name.on('value', (element) => {
      this.setState ( { name: element.val()})
    });
}

  createAccount = () => {
    alert("lul");
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value,
    });
  };

  createAccount = () => {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  };

  signIn = () => {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ hasAccount: true })
      })
      .catch((error) => console.log(error));
  }

  sendData = () => {
    const { key, value } = this.state;
    const db = firebase.database();
    db.ref(key).push(value);
    console.log('Date in db');
  }

 
    render(){
      
        const { hasAccount, name } = this.state;
      console.log(name);
      return(
        <div>
        {
          hasAccount ? (
            <div>
            <input type = 'text' id = 'key' placeholder = 'enter key' onChange = {this.handleChange} />
            <input type = 'text' id = 'value' placeholder = 'enter value' onChange = {this.handleChange}/>
            <input type = "submit" value = "Send data" onClick = { this.sendData } />
            </div>
          ): 
            <div className = "login_block">
              <input type = "text" id = "email" placeholder = "Email" onChange = { this.handleChange }/>
              <input type = "password" id = "password" placeholder = "Password" onChange = { this.handleChange }/>
              <input type = "submit" onClick = { this.createAccount } />
              <input type = "submit" value = "Sign In" onClick = { this.signIn } />
            </div>
        };
      </div>
      );
    }
}