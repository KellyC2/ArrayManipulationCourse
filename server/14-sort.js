//Método mutable y nos permite ordenar dentro d elos arrays
const months=['March','Jan','Feb','Dec']
months.sort()
console.log(months);//[ 'Dec', 'Feb', 'Jan', 'March' ] 
//Para ordenarlo acorde al calendario dbemos darle un peso con numeros.

//------------------------------------------------

const numbers=[1,30,4,21,100000]
numbers.sort()
console.log(numbers);//[ 1, 100000, 21, 30, 4 ]
//Para modificar este ordenamiento debemos añadir un argumento en sort((a,b)=>(a-b))  veamos en el siguiente bloque.
numbers.sort((a,b) =>(a-b))
console.log(numbers);//[ 1, 4, 21, 30, 100000 ]
//Si el objetivo es ordenar de menor a mayor solo debs invertir el orden de la operación en tu arrowfunction.
numbers.sort((a,b)=>b-a)
console.log(numbers);//[ 100000, 30, 21, 4, 1 ]

//------------------------------------------------

const words=['réservé','premier','cominiqué','café','adieu','éclair','banana']
words.sort()
console.log(words);
words.sort((a,b)=>a.localeCompare(b))
console.log(words);

//------------------------------------------------
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a,b)=>b.total-a.total)
console.log(orders);