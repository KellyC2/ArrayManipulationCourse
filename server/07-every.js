/*
.every(): A diferencia del .some(), .every() evalúa que todos los elementos  d emi arraya deben cumplir con la condición y retorna un true o un false. siempre y cuando todas cumplan con la condición.
*/

//Veamos un ejemplo con el ciclo for 
const numbers=[1, 30, 39, 29, 10, 13]
let respuesta=true
for(let i=0; i<numbers.length; i++){
    const element=numbers[i]
    if(element>40){
        respuesta=false
    }
}
console.log('answerWithFor',respuesta);
//Analicemos el mismo ejemplo con el método every
const answerWithEvery=numbers.every(item=>item<=40)
console.log('answerWithEvery', answerWithEvery);

//Veamos otro ejemplo pero con objetos como elementos del array:
const team=[
    {
        name:'Nicolas',
        age:12,
    },
    {
        name:'Andrea',
        age:'8',        
    },
    {
        name:'Zulema',
        age:2,        
    },
    {
        name:'Santiago',
        age:18
    }
]

const isLessThan15=team.every((person)=>person.age<15)

respuesta= (isLessThan15===true)?'Equipo Admitido':'Todos los jugadores deben ser menores de 15 años'
console.log('respuesta', respuesta);