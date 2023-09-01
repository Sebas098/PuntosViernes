//declaro la funcion principal

function crearPadawan(nombre,planeta,edad,estatura,clasificarPadawan){
    setTimeout(function(){
        //Logica de la funcion principal
        let padawan={
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura
        }
        clasificarPadawan(padawan)
    },2000)
}

//llamar a la funcion principal
crearPadawan("Grogu","yodora",500,30,function(padawan){
    if(padawan.edadEstudiante<15){
        console.log(`${ padawan.nombreEstudiante} tienes ${ padawan.edadEstudiante} vas a la clase manejo de la fuerza`)
    }else{
        console.log(`${ padawan.nombreEstudiante} tienes ${ padawan.edadEstudiante} vas a la clase manejo del sable de luz`)
    }
})