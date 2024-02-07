/**
    El mètodo includes() determina si u elemento existe o no en tu array, retornando un valor verdadero o falso.
 */


const pets=['cat', 'dog','bat']

//Ejemplo con  for
let includeInArray=false
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element==='dog'){
        includeInArray=true
        break
    }    
}
console.log('for', includeInArray);

//Ejemplo con includes()
const includes=pets.includes('dog')
console.log('includes', includes);

