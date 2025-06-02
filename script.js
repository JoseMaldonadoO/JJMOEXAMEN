document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("username").value;
  const contrasena = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

 
  if (usuario === "admin" && contrasena === "1234") {
    alert("¡Login exitoso!");
    errorMsg.textContent = "";
  
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos";
  }
});
