// // class Auto {
// //   constructor(color, marca, modelo, encendido = false) {
// //     this.color = color;
// //     this.marca = marca;
// //     this.modelo = modelo;
// //     this.encendido = encendido;
// //   }
// //   encender() {
// //     this.encendido = true;
// //     console.log("auto encendido");
// //   }
// //   apagar() {
// //     this.encendido = false;
// //     console.log("auto apagado");
// //   }
// // }
// // let misAutos = new Auto("rojo", "fiat", "2000");
// // console.log("estado inicial", misAutos.encendido ? "encendido" : "apagado");

// // misAutos.encender();
// // console.log("estado al encender", misAutos.encendido ? "encendido" : "apagado");
// // misAutos.apagar();
// // console.log("estado al apagar", misAutos.encendido ? "encendido" : "apagado");

// class Cuenta {
//   constructor(titular, saldo = 0) {
//     this.titular = titular;
//     this.saldo = saldo;
//   }
//   ingresar(cantidad) {
//     this.saldo += cantidad;
//   }
//   extraer(cantidad) {
//     if (this.saldo >= cantidad) {
//       this.saldo -= cantidad;
//     } else {
//       console.log("no hay saldo");
//     }
//   }
//   informar() {
//     console.log("estado inicial: ", this.saldo);
//     console.log("titular : ", this.titular);
//   }
// }
// let banco = new Cuenta("Alex");

// banco.informar();

// banco.ingresar(100000);

// banco.informar();

// banco.extraer(5000);

// banco.informar();

// ejercicio numero 3
// class Rectacgulo {
//   constructor(alto, ancho) {
//     this.alto = alto;
//     this.ancho = ancho;
//   }
//   modificar(newalto, newancho) {
//     this.alto = newalto;
//     this.ancho = newancho;
//   }
//   mostrar() {
//     console.log(`${this.alto}`);
//     console.log(`${this.ancho}`);
//   }
//   perimetro() {
//     return 2 * (this.alto + this.ancho);
//   }
//   area() {
//     return this.alto * this.ancho;
//   }
// }

// const rectangulo = new Rectacgulo(20, 10);

// rectangulo.mostrar();
// rectangulo.modificar(10, 30);
// rectangulo.mostrar();

// const rectangulo2 = rectangulo.perimetro();
// console.log(`${rectangulo2}`);

// const rectangulo3 = rectangulo.area();
// console.log(`${rectangulo3}`);

// ejercio 4

// class Producto {
//   constructor(codigo, nombre, precio) {
//     this.codigo = codigo;
//     this.nombre = nombre;
//     this.precio = precio;
//   }
//   imprime() {
//     console.log(`${this.codigo} `);
//     console.log(`${this.nombre} `);
//     console.log(`${this.precio} `);
//   }
// }

// const producto1 = new Producto("123", "camiseta", 500);

// const producto2 = new Producto("1234", "JEAN", 400);

// const producto3 = new Producto("12345", "zapatilla", 5000);

// const produc = [producto1, producto2, producto3];

// for (let i of produc) {
//   i.imprime();
// }
