## Resources AJAX V0.0.1

Este readme describe el funcionamiento de la libreria resources-AJAX para el consumo de servicios mediante AJAX
Para el correcto funcionamiento de esta libreria se necesita JQUERY 1.X

### Examples

var serviciosGenericos = new resources([
    {
        name: "getPosts",
        url : "http://localhost:3000/posts/",
        method : "GET",
        async : true      
    }
]);

serviciosGenericos.getPosts({nombre:"Salim Castellanos"},
                            function(result){
                                alert("entro exito: "+result);
                            },
                            function(err){
        
                            }
                           );


### Más información contactar a salimsalim4@gmil.com
