export const contacto = () => {
    const divContacto = document.createElement("div");
    const viewContacto = `
    <div class="contacto">
      <div class="header">
      <div class="logo">
        <img src="img/favicon.png" alt="logo">
      </div>
      <div class="crar contacto">
      <h2 class="registroUsuario">Iniciar Sesion</h2>
    </div>
    <div class="main">
      <div class="record"> 
      <form  id="login-form">
      <div class="subtitulo">
        <h2>Iniciar Sesion</h2>
      </div>
        <div class="formRegistro">
    
        <label>Email Adress</label>
        <input type="email" name="email" class="login-email">
      
      <p>
        <label>Enter 6-digit password</label>
        <input type="password" name="contraseña" class="login-password">
      </p>
      <button type="submit" id="botonInicioSesion" class="botonInicioSesion">"Log In"</button>
    </form> 
   </div>`
    
    divContacto.innerHTML=viewContacto;
    return divContacto;
}