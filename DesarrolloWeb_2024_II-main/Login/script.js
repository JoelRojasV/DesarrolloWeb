// console.log(document);

document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.getElementById('formulario');
    // console.log(formulario);
    const respuesta = document.getElementById('respuesta');
    // evento submit
    document.addEventListener('submit', function(event){
        event.preventDefault();
        // console.log(nombre);
        const nombre = formulario.usuario.value;
        // console.log(apellido paterno);
        const apePat = formulario.pass.value;
        // console.log(apellido materno);
        const apeMat = formulario.pass.value;

        // console.log(sugerencia);
        const sugerencia = formulario.sugerencia.value;
        // Genero
        const genero = formulario.genero.value;
        respuesta.innerHTML = `
            <p><b>Nombre</b>: ${nombre}</p>
            <p><b>Apellido Paterno</b>: ${apePat}</p>
            <p><b>Apellido Materno</b>: ${apeMat}</p>
            <p><b>Genero</b>: ${genero}</p>
            <p><b>Motivo de queja</b>: ${sugerencia}</p>
        `
    })

});
