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

  puedeCircular(dia, terminacion) {
    switch (dia) {
      case 1:
        if (terminacion == 0) {
          return true;
        } else if (terminacion == 1) {
          return false;
        } else if (terminacion == 2) {
          return false;
        } else {
          return true;
        }
        break;
      case 2:
        if (terminacion == 0) {
          return false;
        } else if (terminacion == 1) {
          return true;
        } else if (terminacion == 2) {
          return false;
        } else {
          return true;
        }
        break;
      case 3:
        if (terminacion == 0) {
          return false;
        } else if (terminacion == 1) {
          return false;
        } else if (terminacion == 2) {
          return true;
        } else {
          return true;
        }
        break;
      case 4:
        if (terminacion == 0) {
          return false;
        } else if (terminacion == 1) {
          return false;
        } else if (terminacion == 2) {
          return true;
        } else {
          return true;
        }
        break;
      case 5:
        if (terminacion == 0) {
          return false;
        } else if (terminacion == 1) {
          return false;
        } else if (terminacion == 2) {
          return false;
        } else {
          return true;
        }
        break;
      case 6:
        if (terminacion == 0) {
          return false;
        } else if (terminacion == 1) {
          return false;
        } else if (terminacion == 2) {
          return false;
        } else {
          return true;
        }
        break;
      case 7:
        if (terminacion == 0) {
          return false;
        } else if (terminacion == 1) {
          return false;
        } else if (terminacion == 2) {
          return false;
        } else {
          return true;
        }
        break;
      default:
        return false;
        break;
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

console.log("Prueba puedeCircular");
console.log(app.puedeCircular(1, 0));
console.log(app.puedeCircular(1, 4));
console.log(app.puedeCircular(2, 1));
console.log(app.puedeCircular(2, 2));
console.log(app.puedeCircular(3, 2));
console.log(app.puedeCircular(3, 4));
console.log(app.puedeCircular(4, 2));
console.log(app.puedeCircular(4, 4));
console.log(app.puedeCircular(5, 5));
console.log(app.puedeCircular(5, 4));
console.log(app.puedeCircular(6, 6));
console.log(app.puedeCircular(6, 4));
console.log(app.puedeCircular(7, 7));
console.log(app.puedeCircular(7, 4));
