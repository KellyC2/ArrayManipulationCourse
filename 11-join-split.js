/**
Un join() nos permite crear y retornar un string concatenando todos los elementos del array separadas por comas, o cualquiere separador especificado

 */

const elements=['fire','air', 'water']

let rtaFinal=''
const separator='--'
for (let index = 0; index < elements.length; index++) {
   const element = elements[index];
   rtaFinal=rtaFinal+element+separator    
}



const rta=elements.join('--')

console.log('for', rtaFinal);
console.log('join', rta);

//.split:Un mpetodo de strings  que divide un string de acuerdo al patron especificado y los coloca como elementos de un array. Retorna un array
const title='Curso de manipulación de arrays'
const url=title.split(' ').join('-').toLocaleLowerCase()
console.log(url);
