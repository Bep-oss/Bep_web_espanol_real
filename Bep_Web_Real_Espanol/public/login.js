document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mensaje = document.getElementById('mensaje');
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      mensaje.innerText = 'Ingreso exitoso. Redirigiendo...';
      window.location.href = 'dashboard.html';
    } catch (error) {
      mensaje.innerText = 'Error al iniciar sesión: ' + error.message;
    }
  });
});
