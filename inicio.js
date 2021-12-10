      var conf = 0;
      var edad = prompt("Ingresa tu edad");
      if((edad<18||edad>100))
      {
        window.location.href="https://www.google.com/";
        alert("Tu no edad es válida para ingresar a la página. Te estamos redireccionando a google.com");
        conf++;
      }
      else if(isNaN(edad))
      {
        window.location.href="https://www.google.com/";
        alert("Ingresaste un valor no válido. Te estamos redireccionando a google.com");
        conf++;
      }
      else
      {
        alert("Tu edad es válida para ingresar a la página.");
        conf++;
      }