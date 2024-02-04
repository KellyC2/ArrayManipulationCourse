const students=[
    {
        name:'Jill',
        lastname:'Doe',
        age:'24',
        course:'Marketing',
    },
    {
        name:'John',
        lastname:'Doe',
        age:22,
        course:'Web Development',        
    },
    {
        name:'Jack',
        lastname:'Doe',
        age:20,
        course:'Accounting',
    },
    {
        name:'Jhon',
        lastname:'Ray',
        age:23,
        course:'Web Development',
    },
    {
        name:'Jane',
        lastname:'Doe',
        age:20,
        course:'Financial Management'
    },
]
/*El .map() hace lo mismo que un forEach, recorrer los elemnetos del array pero retornando u arreglo nuevo el cual puede ser guardado en una variable. Por ejemplo */

const completeName=students.map(function(student){
    return student.name + ' ' + student.lastname
})

console.log(completeName)


/*Veamos un ejemplo haciendo uso de una función flecha*/

const courses=students.map((student)=>{
    return student.course
})
console.log(courses)

/*Veamos un ejemplo en el que añadamos un atributo a los elementos de mi array con los atributos ya existentes:*/
const studentWithFullName=students.map((student)=>{
    return {
        fullname: student.name + ' '+ student.lastname,
        age:student.age,
        course: student.course
    }
})
console.log(studentWithFullName)

/*
Para poder copiar todos los items de los objetos podemos usar el 'spread operator'. Por ejemplo en lugar de hacer el siguiente código:
    consta addTitle=students.map((student)=>{
        name: student.name,
        lastname:student.lastname,
        age:student.age,
        course: student.course,
        title:`${student.name}-${student.course}`
    })

    puedes añadir todas las propiedades con el spread operator y aadir las que hace falta:
*/
const addTitle=students.map((student)=>{
    return {
        ...student,
        title:`${student.name}-${student.course}`
    }
})
console.log(addTitle)

/*Actualicemos los datos en mi arreglo: Quiero colocar que todos los estudiantes van a tener el curos de programing */
const programingCourse=students.map((student)=>{
    return{
        ...student,
        course:'Programming',
    }
})
console.log(programingCourse);

/*El metodo .map() no modifica el array original, sino crea un nuevo arreglo  */


/*ejemplo2:Tienes un array de objetos que representan datos de productos con los siguientes atributos:
    name
    price
    stock
Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124.

Para solucionarlo vas a encontrar una función llamada addNewAttr que recibe un parámetro de entrada:

array: Un array de objetos.
Dentro del cuerpo de la función addNewAttr debes escribir tu solución.

    Ejemplo:

    Input:
    [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    }
    ]

    Output:
    [
    {
        name: "Product 1",
        price: 1000,
        stock: 10,
        taxes: 190
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20,
        taxes: 380
    }
    ]
*/

export function addNewAttr(array) {
  return array.map(item => ({
    ...item,
    taxes:Math.trunc(item.price*0.19)    
  }))
}
