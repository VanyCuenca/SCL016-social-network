export const profile = () => {
  const divProfile = document.createElement('div');
  const viewProfile = `
  <div class='profileUsuario'>
  <div class='header'>
    <div class='logo'>
      <img src='img/Tlogo.png' alt='logo'>
    </div>       
  </div>
  <div class='profile'>
    <div class='buscar'>
      <img src='img/lupa.png' alt=''>
        <input type='text'>
    </div>
    <div class='imgAndVideos'>
      <div class='numeroUno'></div>            
      <div class='numeroDos'></div>
      <div class='numeroTres'></div>
      <div class='numeroCuatro'></div>
      <div class='numeroCinco'></div>
      <div class='numeroSeis'></div>
    </div>
  </div>
</div> `;
  divProfile.innerHTML = viewProfile;
  return divProfile;
};