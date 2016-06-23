/*
* Módulo encargado demanejar las peticiones AJAX a nuestro backend
*/

var modelo = function(){
    
    return {};
    
}

var resources = function(servicios){

    var resource = new modelo();
    
    agregarServicio = function(servicio){
        resource[servicio.name] = function(parametros,callSuccess,callError){
            $.ajax({
            url: servicio.url,
            type: servicio.method,
            async: servicio.async,
            data: { },
            success: function(respuesta) {
                callSuccess(respuesta);
            },
            error: function(err) {
                callError(err);
            }
        });
        };
    }

    for(var i=0; i<servicios.length; i++){
        var servicio = servicios[i];
        agregarServicio(servicio, resource);
    }
      
    return resource;
}