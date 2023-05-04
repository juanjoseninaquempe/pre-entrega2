

alert(" Bienvenido a la UFC !!!");
alert("HAGA SUS APUESTAS!");

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



const luchador = [];

luchador.push( new Pokemon('iron-man','androide',10,'shield','misiles',500,100));
luchador.push( new Pokemon('spider-man','araña',2,'tio Ben','telaaraña',300,550));


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



