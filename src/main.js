export default class App {
  convertir(pesos) {
    if (pesos < 2000) {
      return pesos * 20.5;
    } else if (pesos >= 2000) {
      return pesos * 22.7;
    }
  }
  costoRenta(kilometros) {
    if (kilometros < 50) {
      return kilometros * 3;
    } else if (kilometros >= 50 && kilometros < 100) {
      return kilometros * 5;
    } else if (kilometros >= 100 && kilometros < 200) {
      return kilometros * 6;
    } else if (kilometros >= 200) {
      return kilometros * 6.5;
    }
  }
}

let app = new App();

console.log("Prueba convertirPesos()");
console.log(app.convertir(8632));
console.log(app.convertir(568));
console.log(app.convertir(1));

console.log("Prueba costoRenta()");
console.log(app.costoRenta(40));
console.log(app.costoRenta(70));
console.log(app.costoRenta(180));
console.log(app.costoRenta(220));
