import { register } from '../index.js';
import { google } from '../index.js';
export const checkin = () => {
  const divCheckIn = document.createElement('div');
  const viewCheckIn = `
    <div class='checkin'>
      <div class='header'>
        <div class='logo'>
          <img src='img/logotipo.png' alt='logo'>
        </div>
        <div class='title'>
          <h1>ourist places</h1>
        </div>
        <div class='tituloRegistro'>
          <h2 class='User register'>User register</h2>
        </div>
      </div>
      <div class='containerChekIn'>
        <div class='record'>
          <form  id='checkin-form'>
            <div class='formRegistro'>
              <label>Email Adress</label>
              <input type='email' name='email' class='checkin-email' placeholder='E-mail'>      
              <label>Enter password</label>
              <input type='password' name='contraseña' class='checkin-password' paceholder='password'>
               <button id='buttonCheckIn' class='buttonCheckIn'>'Check In'</button>
            </div>            
            <div class='google'>
            <img src='img/email.png' alt='email logo'>
             <button id='buttonGoogle' class='buttonGoogle'>checkin with Google</button>
            </div>  
          </form> 
        </div>
      </div>
    </div>`;
  divCheckIn.innerHTML = viewCheckIn;

  const buttonGoogle = divCheckIn.querySelector('.buttonGoogle');
  buttonGoogle.addEventListener('click', () => {
    google();
    location.href = '#/start';
  });
  const buttonCheckIn = divCheckIn.querySelector('#buttonCheckIn');
  buttonCheckIn.addEventListener('click', () => {
    console.log('escucho cick');
    let email = document.querySelector('.checkin-email');
    let password = document.querySelector('.checkin-password');
    email = email.value;
    password = password.value;
    console.log('este es tu email' + email);
    console.log('este es tu password' + password);
    register(email, password);
    location.href = '#/start';
  });

  return divCheckIn;
};