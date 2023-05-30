class Avenger {
    ///atributos
    nombre;
    tipo;
    nivel;
    entrenador;
    tipoAtaque;
    ataque;
    vida;


// constructor
constructor (nombre,tipo,nivel,entrenador,tipoAtaque,vida,ataque)
{
    this.nombre = nombre;
    this.tipo = tipo;
    this.nivel = nivel;
    this.entrenador = entrenador;
    this.tipoAtaque = tipoAtaque;
    this.ataque = ataque;
    this.vida = vida;

}

// comportamiento / metodos
    atacar = function(nombre){
        console.log (this.nombre + " ataca a " + nombre + " con un tipo de ataque de " + this.tipoAtaque); 
    };

    evolucionar = function(nombreEvolucionado,cantAtaque){
        console.log (this.nombre + "esta evolucionando ...");
        this.nombre = nombreEvolucionado;
        this.ataque = cantAtaque;
        this.nivel++;
        console.log ("ahora paso a llamarse" + this.nombre );
    }
    volverPokemon =() => {
        console.log(this.nombre + "vuelve a la pokebola ...");
    };

    recibirAtaque = (ataqueRecibido,atacante) => {
        console.log(this.nombre + " recibe una cantidad de ataque " + ataqueRecibido + " de " + atacante);
        this.vida = this.vida -ataqueRecibido;
        console.log(this.nombre + " su vida = " + this.vida);
    };

}

