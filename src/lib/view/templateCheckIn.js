export const checkin = () => {
    const divCheckIn = document.createElement("div");   
    const viewCheckIn =  
    `
    <div class="checkin">
      <div class="header">
        <div class="logo">
          <img src="img/logotipo.png" alt="logo">
        </div>
        <div class="tituloRegistro">
          <h2 class="User register">log In</h2>
        </div>
      </div>
      <div class="main">
        <div class="record"> 
          <form  id="checkin-form">
            <div class="formRegistro">
              <label>Email Adress</label>
              <input type="email" name="email" class="checkin-email">      
              <label>Enter password</label>
              <input type="password" name="contraseña" class="checkin-password">
              <button type="submit" id="botonInicioSesion" class="botonInicioSesion">"Log In"</button>
            </div>            
            <div class=" recoverPassword>
            <img src="img/email.png" alt="email logo">
            <button id="buttonGoogle" class="botonInicioSesion">"checkin with Google"</button>
            </div>           
          </form> 
        </div>
      </div>
    </div>`   

    divCheckIn.innerHTML=viewCheckIn;
    return divCheckIn;
}