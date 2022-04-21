let miFormulario = document.getElementById("formulario");


miFormulario.addEventListener("submit",function(e){
    e.preventDefault();
    let mail = document.getElementById("email-form").value;
    alert("Su suscripcion se ha realizado con exito");
    console.log(mail); 

})


