let listaGenerica = [];

let lenguajesDeProgramacion = ['JavaScript','C','C++','kotlin','Python'];

lenguajesDeProgramacion.push('Java','Ruby','GoLang')

function mostrarLenguajesProgramacion(){
  console.log(lenguajesDeProgramacion)
}

function mostrarEnOrdenInverso() {
  for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguajesDeProgramacion[i]);
  }
}