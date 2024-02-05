/**
Lo que hace .reduce() devuelve un valor, no retorna un arreglo. Se utiliza en cálculos de datos. 
El .reduce() recibe una como parámetro 2 valores: una función callback y el valor inicial de mi acumulador. Mi función callback recibe asimismo 2 valores en el parámetro: el nombre de mi acumulador y mi elemento del array
    miArray.reduce(function(miAcumulador, arrayElement){
        return miAcumulador + arrayElement
    }, valorInicialDeMiAcumulador)

 */

//Veamos primero cómo podemos trabajar on un ciclo for:

    let sum=0

    const totals=[1,2,3,4]
    for (let i=0; i<totals.length; i++ ){
        const element=totals[i]
        sum=sum+element
    }
    console.log(sum);

//Veamos cómo podemos trabajar un ejemplo similar con .reduce()
    const numbers=[5,366,48,96,12]
    const suma=numbers.reduce(function(sum, number){
        return sum+number
    }, 0)
    console.log(suma)

//Trabajemos reduce de forma mas corta con nuestro arrow function:
const sumaWithArrow=numbers.reduce(((total, number)=>total+number),0)
console.log(sumaWithArrow);

//Veamos otro ejemplo pero trabjando con objetos:
//Sumemos cuanto es el total de las ordenes que tenemos: 
const orders=[
    {
        customerName:'Nicolas',
        total:60,
        delivered:true,
    },
    {
        customerName:'Zulema',
        total:120,
        delivered:false,
    },
    {
        customerName:'Santiago',
        total:180,
        delivered:true
    },
    {
        customerName:'Velentina',
        total:240,
        delivered:true,
    },
    {
        customerName:'Nicolas',
        total:60,
        delivered:true,
    },
]
const totalOrders=orders.reduce((suma, order)=>suma+order.total,0)
console.log(totalOrders)//660

//Compliquemos un poco mas las operaciones que podemos realizar con reduce: De un arreglo de desarrolladores que tenemos quiero que obtengamos un solo arreglo con todos los skills de los desarrolladores sin que se repitan.  Analicemos el siguiente código para entenderlo. 

    const developers=[
        {
            id:1,
            name:'John',
            skills:['HTML','React', 'Javascript', 'Java']
        },
        {
            id:2,
            name:'Jane',
            skills:['HTML','CSS','Javascript', 'React', 'Redux','Nodejs']
        },
        {
            id:3,
            name:'Jack',
            skills:['HTML','CSS','Javascript', 'React','Redux','Nodejs']
        }
    ]

    //como mi objetivo es obtener un solo valor(Un solo array con todos los skilla), puedo usar reduce: 
    /* 
    new  Set(): Permite filtrar un solo valores para que no se repitan 
    Array.from():Permite crear arreglos(arrays ) de objetos o strings.
    */
    const skills=developers.reduce(function(allSkills,student){
        return Array.from(new Set([...allSkills, ...student.skills]))
    },[])
    console.log(skills)

//Veamos otro caso en el que podamos obtener un objeto como resultado, este objeto debe mostrarme una especie de histograma donde me muestre la cantidad de veces que se repite cada elemento:

const items=[1,2, 3,4, 5, 2,5, 3, 3]
const contador=items.reduce((obj, item)=>{
    if(!obj[item]){
        obj[item]=1
    }else{
        obj[item]=obj[item]+1
    }
    return obj
},{})
console.log(contador)//{ '1': 1, '2': 2, '3': 3, '4': 1, '5': 2 }


//Analicemos otro ejemplo pero esta vez con un array de objetos. Averiguemos cuantos desarrolladores existen en cada nivel. 

const devs=[
    {
        name:'Nicolas',
        level:'low',
    },
    {
        name:'Andrea',
        level:'medium'
    },
    {
        name:'Zulema',
        level:'hight'
    },
    {
        name:'Santiago',
        level:'medium',
    },
    {
        name:'Valentina',
        level:'medium',
    },
    {
        name:'Lucia',
        level:'hight'
    }
]
//Primera forma
const levels=devs
.map(dev=>dev.level)
.reduce((devLevel, developer)=>{
    if(!devLevel[developer]){
        devLevel[developer]=1
    }else{
        devLevel[developer]=devLevel[developer]+1
    } 
    return devLevel
},{})
console.log(levels);

//segunda forma
const rpt=devs.reduce((obj, desarrollador)=>{
    if (!obj[desarrollador.level]){
        obj[desarrollador.level]=1
    } else{
        obj[desarrollador.level]+=1
    }
    return obj
},{})
console.log('rpta' , rpt);


//Llevemos nuestro ejemplo a otro nivel: Tenemos un array que tiene elementos que van del 1 al 10 y debemos contar cuantos elementos hay por ciertos rago dado, por ejemplo cuantos número del 1-5, 6-8, 9-10 hay. El reto es acumular desde rangos.

const numeros=[1,2,3,4,5,6,7,8,9,10]
const respuesta=numeros.reduce((objeto, numero)=>{
    
    if(objeto[numero]>=1&&objeto[numero]<=5){
        objeto['1-5'] +=1
    }else if(objeto[numero]>=6 && objeto[numero]<=8){
          objeto['6-8'] +=1
    }else if(objeto[numero]>=9 &&objeto[numero]<=10){
        objeto['9-10'] +=1
    }      
    return objeto

},{
    '1-5':0,
    '6-8':0,
    '9-10':0,
})

console.log('respuesta', respuesta);//Intento fallido



const respuesta2=numeros.reduce((objeto, numero)=>{
    
    if(numero<=5){
        objeto['1-5']++
    }else if(numero<=8){
        objeto['6-8']++
    }else{
        objeto['9-10']++
    }      
    return objeto

},{
    '1-5':0,
    '6-8':0,
    '9-10':0
})

console.log('respuesta2',respuesta2);






