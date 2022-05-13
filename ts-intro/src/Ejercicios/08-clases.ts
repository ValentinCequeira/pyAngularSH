class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, "New York"); //este llama al ctor de persona normal
  }
}

const ironman = new Heroe("Ironman", 45, "Tony");

console.log(ironman);

//DIFERENCIAS ENTRE CLASE E INTERFACE:

//LAS CLASES SIRVEN PARA CREAR INSTANCIAS
//EN LA INTERFACE NO SE PUEDEN DEFINIR COMO QUIERO QUE FUNCIONE ALGU METODO O GET O SET
