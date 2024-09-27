//Variables: let, const
var nombre = 'ivi'
console.log(nombre)
let num1 = 6
let num2 = 5
console.log(num1 + num2)
const PI = Math.PI
console.log(PI)
console.log(saludar(nombre))
//////////////////////////////////////////////////
//Funciones: function
function saludar(nombre) { return `Hola ${nombre} todo piola wacho?` }
const isOdd = a => a % 2 == 0
console.log(isOdd(3))
const numArray = [3, 2, 6, 5, 7, 9, 12, 15, 24, 27]
const sumArray = a => a.reduce((a, b) => a + b, 0)
console.log(sumArray(numArray))
/////////////////////////////////////////////
//Objetos literales y constructores
const persona = {
    nombre: 'ivi',
    edad: 23,
    profesion: 'developer'
}
console.log(persona)
function Producto(nombre, precio, stock) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.printProduct = () => console.log(`Product: ${nombre}, price: ${precio}, stock: ${stock}`)
}
const pepas = new Producto('pepas', 1200, 58)
const tita = new Producto('tita', 800, 30)
pepas.printProduct()
tita.printProduct()
///////////////////////////////////////////////
//Arrays
const fruits = ['banana', 'tomate', 'frutilla', 'sandia']
console.log(fruits[2])
fruits.push('kiwi')
console.log(fruits)
const onlyOdds = a => a.filter(a => isOdd(a))
console.log(onlyOdds(numArray))
///////////////////////////////////////////
//Funciones y Objetos combinados
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    }
}
function obtenerInfo(persona) {
    return `Persona: nombre: ${persona.nombre} edad: ${persona.edad}`
}
personaChaldu = crearPersona('chaldu', 44)
console.log(personaChaldu)
console.log(obtenerInfo(personaChaldu))
///////////////////////////////////////
//Más sobre Arrays y Funciones
function duplicateArray(array) {
    b = array
    return b
}
otroArray = duplicateArray(numArray)
console.log(otroArray)
function reverseArray(array) {
    array.reverse()
}
reverseArray(otroArray)
console.log(otroArray)
function sortByLenght(array, num) {
    //return array.filter((_, index) => index > num)SE PUEDE ACCEDER AL INDICE CON EL SEGUNDO PARAMETRO DE FILTER ESTO SIRVE PARA MUCHOS METODOS
    return array.filter((a) => array.indexOf(a) > num)
}
console.log(sortByLenght(otroArray, 3))
/////////////////////////////////////////
//Objetos y Arrays de Objetos
const alumnos = [
    {
        nombre: 'marcos',
        edad: 22,
        promedio: 7
    },
    {
        nombre: 'pablo',
        edad: 23,
        promedio: 8
    },
    {
        nombre: 'peke',
        edad: 21,
        promedio: 7
    }
]
function findStudent(array, nombre) {
    return array.find(a => a.nombre === nombre)
}
console.log(findStudent(alumnos, 'pablo'))
function classProm(array) {
    return array.reduce((a, b) => a + b.promedio, 0) / array.length
}
console.log(classProm(alumnos))
///////////////////////////////////////////////
//Uso avanzado de Objetos y Funciones
function Coche(marca, modelo, anio) {
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
    this.arrancar = () => console.log(`${modelo} arrancando`)
    this.detener = () => console.log(`${modelo} deteniendo`)
}
const coche1 = new Coche('renault', '12', 2001)
const coche2 = new Coche('fiat', '500', 2006)
coche1.arrancar()
coche2.detener()
function Persona(nombre, edad) {
    this.nombre = nombre,
        this.edad = edad,
        this.saludar = saludar
    this.saludar = () => console.log(`${nombre} te saluda`)
}
const persona1 = new Persona('ivi', 23)
persona1.saludar()
function Carrito() {
    this.productos = []
    this.agregarProducto = producto => this.productos.unshift(producto)
}
const carrito = new Carrito()
carrito.agregarProducto(pepas)
carrito.agregarProducto(tita)
console.log(carrito)
///////////////////////////////////////////
//Manipulación de Arrays y Objetos
function ordenarNumeros(array) {
    const newArray = array
    return newArray.sort((a, b) => a - b)//para que sea de mayor a menor cambiar de lugar la a y la b
}
console.log(numArray)
console.log(ordenarNumeros(numArray))
function deleteStudent(array, name) {
    return array.filter(a => a.nombre != name)
}
console.log(`el array sin el alumno ${JSON.stringify(deleteStudent(alumnos, 'marcos'))}`)//JSON.stringify, pasa objects js a json
function totalCarrito(array) {
    return array.productos.reduce((a, b) => a + b.precio, 0)
}
console.log(`el total del carrito $${totalCarrito(carrito)}`)
/////////////////////////////////////////
//Uso avanzado de Funciones y Objetos
function crearCalculadora() {//esta sintaxis se debe a que estas definiendo un objeto literal dentro de una funcion en lugar de asignandola a una variable directamente
    return {
        suma: (...nums) => nums.reduce((a, b) => a + b, 0),
        resta: (...nums) => nums.reduce((a, b) => a - b),
        multiplicacion: (...nums) => nums.reduce((a, b) => a * b, 1),
        division: (a, b) => a / b
    }
}
calculadora = crearCalculadora()
console.log(calculadora.multiplicacion(10, 6, 2))
function crearCuentaBancaria() {
    return {
        saldo: 0,
        depositar: function (deposito) { this.saldo += deposito },//EN ESTOS DOS METODOS NO SE PUEDE USAR => PORQUE AL NO TENER THIS, HACEN REFERENCIA AL MOMENTO EN QUE FUE DEFINIDA
        retirar: function (retiro) { if (retiro <= this.saldo) this.saldo -= retiro }
    }
}
const cuentaBancaria = crearCuentaBancaria()
cuentaBancaria.depositar(5000)
cuentaBancaria.retirar(2000)
console.log(cuentaBancaria.saldo)
function Libro(titulo, autor, paginas) {
    this.titulo = titulo
    this.autor = autor
    this.paginas = paginas
    this.detalles = () => console.log(`Libro: ${titulo}, autor: ${autor}, tiene ${paginas} paginas`)
}
const libro = new Libro('El gato', 'Poe', 35)
libro.detalles()
//////////////////////////////////////
//Proyecto Final: Manejo de Datos
function ToDo(descripcion) {//funcion constructor
    this.descripcion = descripcion
    this.completado = false
}
const toDoList = {//objeto literal
    toDos: [],
    addTodo: function (toDo) { this.toDos.unshift(toDo) },
    toDoDone: function (toDo) { toDo.completado = true },
    showPending: function () { console.log(`Tareas pendientes ${JSON.stringify(this.toDos.filter(a => a.completado === false))}`) }
}
const tarea1 = new ToDo('sacar la basura')
const tarea2 = new ToDo('preparar la cena')
toDoList.addTodo(tarea1)
toDoList.addTodo(tarea2)
toDoList.toDoDone(tarea1)
toDoList.showPending()