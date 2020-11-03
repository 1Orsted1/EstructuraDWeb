window.onload = ()=>{
  const nuevaLista = new Lista();
  var agregarInicio = document.querySelector("#opcion1");
  var agregarEnIndice = document.querySelector("#opcion2");
  var borrarDato = document.querySelector("#opcion3");
  var borrarLista = document.querySelector("#opcion4");

  agregarInicio.addEventListener("click", ()=>{
    let dato = parseInt(document.querySelector("#dato").value);
    nuevaLista.agregarAlInicio(dato);
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = nuevaLista.imprimirDato();
  });

  borrarLista.addEventListener("click", ()=>{
    nuevaLista.eliminarTodo();
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = nuevaLista.imprimirDato();
  });

  agregarEnIndice.addEventListener("click", ()=>{
    let indiceN = parseInt(document.querySelector("#indice").value);
    let datoI = parseInt(document.querySelector("#dato").value);
    nuevaLista.agregarDatoEn(datoI, indiceN);
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = nuevaLista.imprimirDato();
  });
  borrarDato.addEventListener("click", ()=>{
    let dato = parseInt(document.querySelector("#dato").value);
    nuevaLista.eliminar(dato);
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = nuevaLista.imprimirDato();
  });

};
class nodo{
  constructor(dato, siguiente){
    this.dato = dato;
    this.siguiente = siguiente;
  };
};

class Lista{

  constructor(){
    this.primerDato = null;
    this.cantidadNodos = 0;
  };

  agregarAlInicio(dato){
    const nuevoNodo = new nodo(dato, null);
    if(!this.primerDato){
      this.primerDato = nuevoNodo;
    }else{
      let actual = this.primerDato;
      while(actual.siguiente){
	actual = actual.siguiente;
      };
      actual.siguiente = nuevoNodo;
    };
    this.cantidadNodos++;
  };

  agregarDatoEn(dato, indice){
    if(indice < 0 || indice > this.cantidadNodos){
      return null;
    };
    const nuevoNodo = new nodo(dato);
    let actual = this.primerDato;
    let anterior;
    if(indice === 0){
      nuevoNodo.siguiente = actual;
      this.primerDato = nuevoNodo;
    }else{
      for(let i = 0; i < indice; i++){
	anterior = actual;
	actual = actual.siguiente;
	console.log(anterior);
      };
      nuevoNodo.siguiente = actual;
      anterior.siguiente = nuevoNodo;
    };
    this.cantidadNodos++;
  };

  imprimirDato(){
    if(!this.cantidadNodos){
      return null;
    };
    let actual = this.primerDato;
    let salida = '';
    while(actual){
      salida += '['+actual.dato+"] =>";
      actual = actual.siguiente;
    }
    salida += 'null';
    return salida;
  };

  eliminar(dato){
    let actual = this.primerDato;
    let anterior;
    while(actual){
      if(actual.dato === dato){
	if(!anterior){
	  this.primerDato = actual.siguiente;
	}else{
	  anterior.siguiente = actual.siguiente;
	};
	this.cantidadNodos--;
	return this.primerDato;
      };
      anterior = actual;
      actual = actual.siguiente;
    };
    return null;
  };

  eliminarTodo(){
    let actual = this.primerDato;
    while(actual){
      actual = actual.siguiente;
      this.primerDato = actual;
    };
  };

};
