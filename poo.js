// class Auto {
//   constructor(color, marca, modelo, encendido = false) {
//     this.color = color;
//     this.marca = marca;
//     this.modelo = modelo;
//     this.encendido = encendido;
//   }
//   encender() {
//     this.encendido = true;
//     console.log("auto encendido");
//   }
//   apagar() {
//     this.encendido = false;
//     console.log("auto apagado");
//   }
// }
// let misAutos = new Auto("rojo", "fiat", "2000");
// console.log("estado inicial", misAutos.encendido ? "encendido" : "apagado");

// misAutos.encender();
// console.log("estado al encender", misAutos.encendido ? "encendido" : "apagado");
// misAutos.apagar();
// console.log("estado al apagar", misAutos.encendido ? "encendido" : "apagado");

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar(cantidad) {
    this.saldo += cantidad;
  }
  extraer(cantidad) {
    if (this.saldo >= cantidad) {
      this.saldo -= cantidad;
    } else {
      console.log("no hay saldo");
    }
  }
  informar() {
    console.log("estado inicial: ", this.saldo);
    console.log("titular : ", this.titular);
  }
}
let banco = new Cuenta("Alex");

banco.informar();

banco.ingresar(100000);

banco.informar();

banco.extraer(5000);

banco.informar();
