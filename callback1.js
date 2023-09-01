//declarando la Funcion principal
function funcionPrincipal(usuario,contrasena,funcionsecundaria){
    setTimeout(function(){
        //LOGICA QUE IMPLEMENTA LA FUNCION PRINCIPAL
        //validar el usuario y la contraseña en BD
        if(usuario=="admin"&& contrasena=="admin"){
            estadoValidacion=true
            funcionsecundaria(estadoValidacion)
        }else{
            estadoValidacion=false
            funcionsecundaria(estadoValidacion)
        }
        },2000)
    }

    //LLAMAR LA UNCION PRINCIPAL

funcionPrincipal("admin","koko",function(estado){
    if(estado == true){
        console.log("Bienvenido")
    }else{
        console.log("no pasa")
    }
}) 
//se declara la funcion 2 