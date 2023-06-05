let luchador = []

////traerme los elementos del dom
const selectluchadores = document.getElementById('productos');
const btnAgregar = document.getElementById('agregar');


luchador.push( new Avenger('iron-man','androide',10,'shield','misiles',550,500));
luchador.push( new Avenger('spider-man','araña',2,'tio Ben','telaaraña',300,150));
luchador.push( new Avenger('thor','racknaro','iron-man','odin','impac trueno',200,200));
luchador.push( new Avenger('hulk','verde',2,'bruce banner','cadena al cuello',600,750));

localStorage.setItem('avengersLocal',JSON.stringify(luchador));

allEventListeners();


function allEventListeners()
{
  ////agregamos un escuchador del evento cuando el DOM se carga
  window.addEventListener('DOMContentLoaded', traerItems);

  ///event listener de agregar un producto al carrito
  btnAgregar.addEventListener('click', (e) =>
  {
     e.preventDefault(); ///evito el refresque
    const productoSeleccionado = luchador[+selectluchadores.value]; ///obtengo el producto elegido
    console.log(productoSeleccionado);
    
  });

}


function traerItems()
{
  ///traer los productos del localStorage
  ///si no hay nada inicializara stock en vacio []
  luchadoresufc = JSON.parse(localStorage.getItem('avengersLocal')) || [];
  popularDropDown();
}

///rellenamos el dropDown de productos
function popularDropDown() {
    luchadoresufc.forEach((product,index) => {
      const option = document.createElement('option');
      option.textContent = `${product.nombre}: ${product.tipo}`;
      option.value = index; ///el indice donde se encuentra este producto
      selectluchadores.appendChild(option);
    });
  }








/*

  let total;

  let precioItem1= Number(prompt("CUANTO POR EL LUCHADOR 1:"));

  while(precioItem1<0 ){
      precioItem1= Number(prompt("POR FAVOR INGRESE UN NUMERO VALIDO:"));
  } 


  let precioItem2= Number(prompt("CUANTO POR EL LUCHADOR 2:"));
 
  while( precioItem2<0 ){
       precioItem2= Number(prompt("POR FAVOR INGRESE UN NUMERO VALIDO:"));
  } 

  total=precioItem1 + precioItem2;





let opcion="si";

do{

        console.log(" LUCHADORES :")
        for (item of luchador) {
            console.log (item.nombre);
        }

        console.log("A CONTINUACION VEREMOS MOVIEMIENTOS DE LA PELEA ");

        luchador[0].atacar(luchador[1].nombre);

        luchador[1].recibirAtaque(luchador[0].ataque,luchador[0].nombre);

        luchador[1].atacar(luchador[0].nombre);

        luchador[0].recibirAtaque(luchador[1].ataque,luchador[1].nombre);

        if(luchador[0].vida > luchador[1].vida)
        {
            alert(luchador[0].nombre + " gano y se lleva la plata que apostaron " + total);
        }else{
            alert(luchador[1].nombre + " gano y se lleva la plata que apostaron " + total);
        }

        opcion=prompt("desea continuar si/no");

        luchador[0].vida= prompt("ingrese vida de IRON MAN");

        luchador[1].vida= prompt("ingrese vida de spider SPIDER MAN");

}while(opcion=="si");

*/

