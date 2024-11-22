
    let Usuario 
    let Quieresusuario
    Quieresusuario = prompt("Quieres crear un usuario?");

    
    if  (Quieresusuario === "si") {
      Usuario = {
   
       nombre: prompt("Ingresa tu nombre"),
       apellido: prompt("Ingresa tu apellido"),
       correo: prompt("Ingresa tu correo"),
       ocupacion: prompt("Ingresa tu ocupacion"),
       edad: prompt("Ingresa tu edad")
   
       }
     console.table(Usuario);
   
    
       if (Usuario.ocupacion === "Ingeniero"){
        alert("Hola " + Usuario.nombre + " " + Usuario.apellido + ", tu objeto es " + "lapiz");
        }
        if (Usuario.ocupacion === "Medico"){
          alert("Hola " + Usuario.nombre + " " + Usuario.apellido + ", tu objeto es " + "libro");
          }
   
          if (Usuario.ocupacion === "Developer"){
           alert("Hola " + Usuario.nombre + " " + Usuario.apellido + ", tu objeto es " + "PC");
          }
          if (Usuario.ocupacion === "Jardinero"){
           alert("Hola " + Usuario.nombre + " " + Usuario.apellido + ", tu objeto es " + "Planta");
          }
          if (Quieresusuario === "si") {alert("Adios");
         }
         

    }else  if  (Quieresusuario === "no") {
alert("No quieres crear un usuario, adios");}