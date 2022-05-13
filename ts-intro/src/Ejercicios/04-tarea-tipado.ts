interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Direccion;
  habilidades: Habilidades;
  mostrarDatos: () => string;
}

interface Habilidades {
  hab1: string;
  hab2: string;
}

interface Direccion {
  calle: string;
  pais: string;
  ciudad: string;
}

const superHeroe: SuperHeroe = {
  nombre: "Spiderman",
  edad: 30,
  direccion: {
    calle: "nose",
    pais: "arg",
    ciudad: "cba",
  },
  habilidades: {
    hab1: "loquito",
    hab2: "chinwenwencha",
  },
  mostrarDatos() {
    return (
      this.nombre +
      ", " +
      this.direccion.ciudad +
      ", " +
      this.direccion.pais +
      ", " +
      this.habilidades.hab1 +
      ", " +
      this.habilidades.hab2
    );
  },
};

const datos = superHeroe.mostrarDatos();
console.log(datos);
