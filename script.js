

const btnNroVida = document.getElementById('nroVida');
btnNroVida.addEventListener('click', calcularNumeroDeVida);

const btnNroAlma = document.getElementById('nroAlma');
btnNroAlma.addEventListener('click', calcularNroAlma);

const btnNroCamino = document.getElementById('nroCamino');
btnNroCamino.addEventListener('click', calcularNroCamino);


//*Creamos funciones flechas y empleamos "return" para obtener los valores devueltos y poder reutilizarlos; 
// ya que la mayoría de los resultados numerológicos son basados en las combinaciones
//de los numeros de la fecha de nacimiento.


//Obtener el valor del día reducido a un sólo dígito.
   function obtenerDia (){
       
    let dia = parseInt(prompt("Ingresá el número del día de tu nacimiento"));
       if(dia > 31){
        alert("El número ingresado no es válido");
        obtenerDia();
    }
    else if(dia <= 0){
        alert("El número ingresado no es válido");
        obtenerDia();
    }
    else if (dia > 9){
        let _dig1=dia%10;
        let _dig2=Math.floor(dia/10);
            
        //Acá se suman los dos digitos obtenidos, y dan el resultado final.
         nroDiaTotal = _dig1 + _dig2;
    }
    else{
        nroDiaTotal = dia; 
        //console.log(nroDiaTotal);
    }
    return nroDiaTotal;
 }



 
//Obtener el valor del mes reducido a un sólo dígito. 
function obtenerMes(){
    let mes = parseInt(prompt("Ingresá el número del mes de tu nacimieto"));
       if(mes > 12){
        alert("El número ingresado no es válido");
        obtenerDia();
    }
    else if(mes <= 0){
        alert("El número ingresado no es válido");
        obtenerDia();
    }
    else if (mes > 9){
        let _dig1=mes % 10;
        let _dig2=Math.floor(mes / 10);
            
        //Acá se suman los dos digitos obtenidos, y dan el resultado final.
         nroMesTotal = _dig1 + _dig2;
           console.log(nroMesTotal);
    }
    else{
        nroMesTotal = mes; 
        console.log(nroMesTotal);
    }
    return nroMesTotal;
       }




//Obtener el valor del año reducido a un sólo dígito. 
function obtenerAnio(){
    let anio  = parseInt(prompt("Ingrese año de nacimiento"));
             if(anio <= 0){
             alert("Número inválido");
             obtenerAnio();           
            }
    else if (anio > 2022){
        alert("Imposible! Aún no has nacido");
        obtenerAnio();
    }
       
            else if(anio > 9) {
              
        unidad= anio % 10;
        anio= anio - unidad;
        anio= anio / 10;
        decena= anio % 10;
        anio= anio - decena;
        anio= anio / 10;
        centena= anio % 10;
        anio= anio - centena;
        anio= anio / 10;
        unidadDeMil= anio % 10;
        preAnio = unidad + decena + centena + unidadDeMil ;}
       
        else{
            alert("Algo está mal. Comienza de nuevo");
            obtenerAnio();
        }
        if(preAnio > 9){
            let _dig1=preAnio%10;
            let _dig2=Math.floor(preAnio/10);
            
        //Acá se suman los dos digitos obtenidos, y dan el resultado final.
           nroAnioTotal = _dig1 + _dig2;
           console.log(nroAnioTotal);
        }
        return nroAnioTotal;
    }
    

   
//FUNCIONES INTERACTIVAS// usan funciones anidadas y reutilizables. 



//Suma del dia + el mes y si el resultado es mayor a 9, lo reduce a un sólo dígito.   
       function calcularNroAlma(){
                obtenerDia();
                obtenerMes();
            _nroAlma = nroDiaTotal + nroMesTotal;
            if(_nroAlma > 9 ){
                let _dig1= _nroAlma % 10;
                let _dig2= Math.floor(_nroAlma / 10);
                    
                //Acá se suman los dos digitos obtenidos, y dan el resultado final.
                _nroAlma = _dig1 + _dig2;
                alert("Tu número de Alma es: " + _nroAlma);
            }
            else{
                alert("Tu número de Alma es: " + _nroAlma)
            }
            return _nroAlma;
        }
   
  

//Suma todos los dígitos del año y si el resultado es mayor a 9, lo reduce a un sólo dígito. 
        function calcularNroCamino(){
            obtenerAnio();
            alert("Tu número de Camino es: " + nroAnioTotal);
            return nroAnioTotal;
        }



        //Suma del dia + el mes + el año,  y si el resultado es mayor a 9, lo reduce a un sólo dígito. 
        function calcularNumeroDeVida(){
            obtenerDia();
            obtenerMes();
            obtenerAnio();
            numVida = nroDiaTotal + nroMesTotal + nroAnioTotal;
            //console.log(numVida);
            if(numVida > 9){
                let _dig1= numVida % 10;
                let _dig2= Math.floor(numVida / 10);
                    
                //Acá se suman los dos digitos obtenidos, y dan el resultado final.
                _numVida = _dig1 + _dig2;
                alert("Tu número de Vida es: " + _numVida);
            }
            else{
                alert("Tu número de Vida es: " + numVida);
            }
        }


        