/*
Flat nos ayuda a  manipular arrays que tienen otros arrays dentro.
Nos ayuda a generar un array sin elementos anidados, es decir un array de un solo nivel.

 */

const matriz=[
    [1,2,3],
    [4,5,6],
    [7,8,9,[1,2,[3,4,[5,6,7,[8,9]]]]],
]

//solucionemos este arraycon for:
const array=[]
for (let i = 0; i < matriz.length; i++) {
    const elementarray = matriz[i];
    for(let j=0;j<elementarray.length;j++){
        const element=elementarray[j]
        array.push(element)
    }
    
}
console.log(array);

//Con recurisvidad
function profundidad(list){
    let newList=[]
    if(typeof list!="object")
    return [list]
list.forEach(element=>{
    newList=newList.concat(profundidad(element))
})
return newList
}
const newArray=profundidad(matriz);
console.log(newArray);


//Intenta solucionar cuando tenemos mas de una elemento tipo array anodado?. Trandriamos que seguir llamanos mas for anidados. Para eviat ellos usamos Flat. Veamos un ejemplo:

const withFlat=matriz.flat(6)
console.log('withFlat', withFlat);


