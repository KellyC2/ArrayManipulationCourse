/**
 .filter() Nos ayuda a seleccionar elementos basados en una condición. 
 Pudes obtener esos datos son un ciclo for de la siguiente manera.
        const webDevelpment=[]
        for(let i=0; i<students.length; i++){
            if(students[i].course==='Web Development'){
                webDevelopment.push(student[i])
            }
        }
 Para escribir menos podemosusar usar filter de la siguiente manera:
        const result=students.filter(function(student){
            if(student.course==='Web Develpment'){
                return true
            }
        })
 
 Analicemos los siguientes ejemplos pero haciendo uso de la función flecha
 */
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

//Selecciones a los estudiantes que solo llevan el curos de 'Desarrollo Web'
const webDevelopment=students.filter((student)=>student.course=='Web Development')
console.log(webDevelopment)

//Selecciones a estudiante que tengan igual o menor a 21 años.
const lessThan21=students.filter(student=>student.age<=21)
console.log(lessThan21);

