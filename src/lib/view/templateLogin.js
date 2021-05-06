import { auth} from '../index.js';
import { google } from '../index.js';
// import { observer } from '../index.js'
export const login = () => {
  const divLogIn = document.createElement('div');
  const viewLogIn = `
    <div class='login'>
      <div class='header'>
        <div class='logo'>
          <img src='img/logotipo.png' alt='logo'>
        </div>
        <div class='tituloRegistro'>
          <h2 class='logIn'>log In</h2>
        </div>
      </div>
      <div class='main'>
        <div class='record'>
            <div class='formRegistro'>
              <label>Email Adress</label>
              <input type='email' name='email' class='login-email' placeholder='E-mail'>      
              <label>Enter password</label>
              <input type='password' name='password' class='login-password' placeholder='password'>
              <button  id='buttonLogin' class='buttonLogin'>'Log In'</button>
            </div>
            <div class='recoverPassword'>
              <a href='#/recoverPassword'>recover password</a>
            </div>
            <div class='message' id= 'message'>
              <a href='#/recoverPassword'>recover password</a>
            </div>
            <div class='google'>
            <img src='img/email.png' alt='email logo'>
            <button id='buttonGoogle2' class='buttonGoogle2'>login with Google</button>
            </div>          
        </div>
      </div>
    </div>`;
  divLogIn.innerHTML = viewLogIn;
//google
  const buttonGoogle2 = divLogIn.querySelector('#buttonGoogle2');
  buttonGoogle2.addEventListener('click', () => {
    google();
    console.log('entraste a google');
  });
  // inicio de sesión
  const buttonLogIn = divLogIn.querySelector('#buttonLogin');
  buttonLogIn.addEventListener('click', () => {
    console.log('escucho cick');
    let email = document.querySelector('.login-email');
    let password = document.querySelector('.login-password');
    email = email.value;
    password = password.value;
    console.log('este es tu email' + email);
    console.log('este es tu password' + password);
    auth(email, password);
  });
// mensaje usuario registrado
    // export const message = () => {
    //   divLogIn.querySelector('.message');
    //   message.innerHTML= 'para usuarios activos';    
    // }
    //  observer();

  return divLogIn;
};