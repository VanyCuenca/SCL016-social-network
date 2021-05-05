export const contactos = () => {
  const divContactos = document.createElement('div');
  const viewContactos = `
  <div class='Contactos'>
      <div class='header'>
        <div class='logo'>
          <img src='img/logotipo.png' alt='logo' />
        </div>
        <div class='title'>
          <h1>ourist places</h1>
        </div>
        <div>
          <div class='usuario'>
            <img src='img/usuario1.png' alt='foto del usuario' />
          </div>
        <div class='title'>
          <h2>Add Contact</h2>
        </div>
      </div>
      <div class='main'>
        <label>Name</label>
        <input type='text' name='name' class='name' placeholder='Name' />
        <label>surname</label>
        <input type='text' name='surname'class='surname' placeholder='surname'/>
        <label>Gmail</label>
        <input type='text' name='gmail' class='gmail' placeholder='Gmail' />
        <label>Phone Number</label>
        <input type='text' name='phoneNumber'class='phoneNumber'placeholder='Phone Number'/>
        <div class='nuevoUsuario'>
          <div class='foto2'></div>
          <div class='nombreUsuario'></div>
          <div class='numeroUsuario'></div>
          <button type='button' id='buttonSave' class='buttonSave'>Add</button>
        </div>
        <div class='listaContactos'>
          <div class='contactoUno'></div>
          <div class='contactoDos'></div>
          <div class='contactoTres'></div>
          <div class='contactoCuatro'></div>
                   
        </div>
        <div class='footer'>
          <div class='inicio'>
            <img src='img/casa.png' alt='imagen de inicio' />
          </div>
          <div class='favorito'>
            <img src='img/estrella.png' alt='imagen favoritos' />
          </div>
          <div class='video'>
            <img src='img/video.png' alt='imagen video' />
          </div>
          <div class='tienda'>
            <img src='img/tienda.png' alt='foto del usuario' />
          </div>
          <div class='usuario'>
            <img src='img/usuario1.png' alt='foto del usuario' />
          </div>
        </div>
      </div>
    </div>`;

  divContacto.innerHTML = viewContacto;
  return divContacto;
};