
 var datos = new Array();  var i = 0; 
 var validarOperaciones = true; var validacionPunto = false; var punto ="";

function ejecuta() 
{ 
    elementos = document.querySelectorAll('[name="num-Simbolo"]');
    for (let index = 0; index < elementos.length; index++) 
    {
        elementos[index].addEventListener("click", function (event) { numeroEntrada(event.target.getAttribute('value')) }, false);
    }

}

function numeroEntrada(n)
{
   if (isNaN(n))
   {  
       if(n != ".")
        {
           if(n != "R")
           {
                 if (validarOperaciones == false)
                 {
                     datos[i] = n;
                     i++;
                     validarOperaciones = true;
                     validacionPunto = false;
                 }
           }
           else
           {  
               if(i > 0)
               {   
                     if (isNaN(datos[i]))
                     {
                         validarOperaciones = false;
                         validacionPunto = false;
                     }
                     else
                     {
                         validarOperaciones = true;
                         validacionPunto = true;
                     }

                     datos.pop();
                     i--;

                     if(i == 0)
                     {
                         document.getElementById("monitor").value = "0";
                     }
               }
   
           }

       }
       else
       {   
           if (validacionPunto == false)
           {
                 datos[i] = n;
                 i++;
                 validacionPunto = true;  
           } 
       }
   }
   else
   { 
        datos[i] = parseFloat(n);
        i++;
        validarOperaciones = false
   }

   mostrar();

}

function mostrar()
{
    var datosB = new Array(); var x = 0; var numero = "";
    document.getElementById("display").value = "";

    for (let index = 0; index < datos.length; index++) 
    {
        document.getElementById("display").value = document.getElementById("display").value + datos[index];

        if ( isNaN(datos[index]) )
        {
             if(datos[index] == ".")
             {
                 numero = numero + datos[index];
                 datosB[x] = numero;
             }
             else
             {
                 x++;
                 numero = "";
                 datosB[x] = datos[index];
                 x++; 
             } 
        }
        else
        {
             numero = numero + datos[index];
             datosB[x] = parseFloat(numero);
        }

    }

    var operacion; var resultado;

    for (let index = 0; index < datosB.length; index++) 
    {
        if ( isNaN( datosB[index] ))
        {
             operacion = datosB[index];
             if(operacion == "=")
             {
                 document.getElementById("display").value = resultado;
                 datos = [];
                 i = 0;
                 datos[i] = resultado;
                 i++;
                 validarOperaciones = false;
             }
        }
        else
        {
            switch(operacion) 
            {  
                case "+":
                   resultado = parseFloat(resultado) + parseFloat(datosB[index]);
                break;
                case "-":
                   resultado = parseFloat(resultado) - parseFloat(datosB[index]);
                break;
                case "*":
                   resultado = parseFloat(resultado) * parseFloat(datosB[index]);
                break;
                case "/":
                   resultado = parseFloat(resultado) / parseFloat(datosB[index]);
                break;
                default:
                   resultado =  parseFloat(datosB[index]);     
            }
    
        }    

       if (resultado != undefined)
       {
              document.getElementById("monitor").value = resultado;
       }
       else
       {
              document.getElementById("monitor").value = "0.";
       }
      
    }

}   

window.onload = ejecuta;











