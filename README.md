## Resources AJAX V0.0.2

##Libreria javascript para el consumo de servicios web mediante AJAX, para el correcto funcionamiento de esta libreria se necesita JQUERY 1.X

### Examples

```javascript
var serviciosGenericos = new resources([
    {
        name: "getPosts",
        url : "http://localhost:3000/posts/",
        method : "GET",
        async : true      
    },
	{
        name: "getComents",
        url : "http://localhost:3000/posts/coments",
        method : "GET",
        async : true      
    }
]);

serviciosGenericos.getPosts({nombre:"Salim Castellanos"},
                            function(result){
                                alert("entro exito: "+result);
                            },
                            function(err){
								alert("entro error: "+err);
                            }
                           );
						   
serviciosGenericos.getComents({},
                            function(result){
                                alert("entro exito: "+result);
                            },
                            function(err){
								alert("entro error: "+err);
                            }
                           );
						   
```

### M�s informaci�n contactar a salimsalim4@gmil.com