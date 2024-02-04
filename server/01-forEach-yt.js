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
        name:'Ryan Jhon',
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

/*
Los metodos foreach y map usan funciones callback, es decir, usan funciones como parámetros. Lo que hace esta función callback es recibir como paramétro cada uno de los elementos del array, los indices o el arreglo total; queda en tu decisión que elementos quieres recibiry cómo vas a aoperar con ellas

    students.forEach(function(student){
        console.log(student)
    })

    students.forEach(function(student, index){
        console.log(student)
        console.log(index)
    })

    students.forEach(function(student, index, students){
        console.log(student)
        console.log(index)
        console.log(students)
    })

*/

/*La forma anterior de escribir del forEach es algo extensa por lo cual otra opción es la función flecha o conocida también como arrow function.

La forma de escribir esta función flecha es de la siguiente manera:

    students.forEach((student)=>{console.log(student)})
*/

/* Es muy importante entender que como los elementos de mi array es un objeto yo puede acceder a los atributos de cada elemento. 
Por ejemplo si solo quiero acceder a los cursos de cada estudiante puedo hacerlo de la siguiente manera:*/
students.forEach((student)=>{console.log(student.course)})

/*Extraigamos el nombre completo de cada estudiante: */
students.forEach((student)=>{console.log(student.name + ' ' + student.lastname)})

/*Asimismo es muy importante recordar que for each es un método que no retorna ningún arreglo de los datos, si queremos guardar los datos mostrados debemos realizarlos a traves de la funcion del callback, solicitando que sea insertado en alguna otra variable */

const fullNames=[]
students.forEach((student)=>{
    fullNames.push(student.name + ' ' + student.lastname)
})

console.log(fullNames)