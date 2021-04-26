export const login = () => {
    const divLogIn = document.createElement('div');
    const viewLogIn = `
      <div class='login'>
        <div class='header'>
          <div class='logo'>
            <img src='img/logotipo.png' alt='logo'>
          </div>
          <div class='tituloRegistro'>
            <h2 class='Log In'>log In</h2>
          </div>
        </div>
        <div class='main'>
          <div class='record'> 
            <form  id='login-form'>
              <div class='formRegistro'>
                <label>Email Adress</label>
                <input type='email' name='email' class='login-email'>      
                <label>Enter password</label>
                <input type='password' name='contraseña' class='login-password'>
                <button type='submit' id='botonInicioSesion' class='botonInicioSesion'>'Log In'</button>
              </div>
              <div class=' recoverPassword>
                <a href='#/recuperarContraseña'>recover password </a>
              </div>
              <div class=' recoverPassword>
              <img src='img/email.png' alt='email logo'>
              <button id='buttonGoogle' class='botonInicioSesion'>'login with Google'</button>
              </div>           
            </form> 
          </div>
        </div>
      </div>`;
    divLogIn.innerHTML = viewLogIn;
    return divLogIn;
  };