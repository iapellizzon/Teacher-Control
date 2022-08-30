//ESTRUCTURA DE LA APP

class Teacher {
  constructor(nombre, apellido, materia, estado, enFalta) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.materia = materia;
    this.estado = false;
    this.enFalta = false;
  }
}

const teachers = [];

const state = [
  {
    nombre: "Nora",
    apellido: "Guzman",
    materia: "Matematica",
    estado: "",
    enFalta: "",
  },
  {
    nombre: "María",
    apellido: "Gómez",
    materia: "Lengua",
    estado: "",
    enFalta: "",
  },
  {
    nombre: "Hernán",
    apellido: "Jukovich",
    materia: "Inglés",
    estado: "",
    enFalta: "",
  },
  {
    nombre: "Cristian",
    apellido: "Olmos",
    materia: "Francés",
    estado: "",
    enFalta: "",
  },
];

//FUNCIONES DE LA APP

function infoTeacher() {
  /*   let nombre = prompt("Ingresá tu nombre"); */
  let nombre = document.getElementById("input-nombre").value;
  /*  let apellido = prompt("Ingresá tu apellido"); */
  let apellido = document.getElementById("input-apellido").value;
  /*  let grado = prompt("Ingresá tu grado"); */
  let materia = document.getElementById("input-materia").value;
  /* let comision = prompt("Ingresá tu comisión"); */
  let docente = new Teacher(nombre, apellido, materia);
  teachers.push(docente);
  console.log(teachers);

  for (const teacher1 of Teacher) {
    let h4 = document.createElement("h4");
    h4.innerHTML =
      teacher1.nombre + " " + teacher1.apellido + " " + teacher1.materia;
    document.body.appendChild(h4);
  }
}

function showState() {
  return prompt("Ingrese estado");
}

/* for (const student of students) {
    let h2 = document.createElement("h2");
    let h5 = document.createElement("h5");
    h2.innerHTML = student.nombre + " " + student.apellido;
    h5.innerHTML = student.grado + " " + student.comision;
    document.body.appendChild(h2);
    document.body.appendChild(h5);
  } */

/* const ciudad = ["Rosario", "Santa Fe", "Buenos Aires", "Mendozaa"];
  
  for (let i = 0; i < ciudad.length; i++) {
    let h2 = document.createElement("h2");
    h2.innerHTML = ciudad;
    document.body.appendChild(h2);
  } */

/* const tareas = [];
  for (let index = 0; index < 5; index++) {
    tareas.push(prompt("INGRESAR TAREA"));
  }
  let ul = document.createElement("ul");
  let inner = "";
  for (const tarea of tareas) {
    inner += `<li>${tarea}</li>`;
  }
  ul.innerHTML = inner;
  document.body.appendChild(ul); */

//EJERCICIO PARA ENTREGADO//

/* let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  
  const nombreApellido = nombre + " " + apellido;
  
  document.getElementById("resultado").innerHTML = nombreApellido; */

/* let paises = document.getElementsByClassName("paises");
  
  console.log(paises[1].innerHTML); */

/* paises[1].innerHTML = "Venezuela"; */

/* for (let i = 0; i < paises.length; i++) {
    paises[i].innerHTML = paises[i].innerHTML + "!";
  } */

/* const productos = [
    { id: 100, nombre: "zapa pepe", precio: 100 },
    { id: 101, nombre: "zapa adidas", precio: 110 },
    { id: 102, nombre: "zapa topper", precio: 120 },
    { id: 103, nombre: "vestido lola", precio: 130 },
  ];
  
  const producto1 =
    '<div><h3>' + productos[0].nombre + '</h3><p>Precio :' + productos[0].precio + '</p><p>Id: ' + productos[0].id '</p></div>';
    document.getElementById('div1').innerHTML = producto1;
  
    const producto2 =
    '<div><h3>' + productos[1].nombre + '</h3><p>Precio :' + productos[1].precio + '</p><p>Id: ' + productos[1].id '</p></div>'; 
    document.getElementById('div2').innerHTML = producto2;
  
    const producto3 =
    '<div><h3>' + productos[2].nombre + '</h3><p>Precio :' + productos[2].precio + '</p><p>Id: ' + productos[2].id '</p></div>'; 
    document.getElementById('div2').innerHTML = producto2;
   */
