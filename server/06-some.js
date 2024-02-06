/*.some(): Deev uelve true o false si al menos un elemento o atributo de mi elemento cumple con mi condicón.
El mpetodo some recibe como parámetro una función callback y esta función  recibe como argumento a cada elemento de mi array.
    const result=myArray.some(function(myElement){
        if(myvalidation){
            return true
        }
    })

    
*/


const numbers=[1,2,3,4]
let rta=false
for(let i=0;i<numbers.length; i++){
    const element=numbers[i]
    if(element %2===0){
        rta=true
        break
    }
}
console.log(rta);

const rta2=numbers.some(item=>item%2===0)
console.log('par: ',rta2)

//Veamos otro ejemplo con objetos: Busquememos si al menos uno de los pedidos fueron entregados.
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

const delivered=orders.some(obj=>obj.delivered)
console.log('delivered: ', delivered)

const moreThan200=orders.some(objeto=>objeto.total>=200)
console.log('moreThan200: ', moreThan200);

//Analicemos un ejemplo mas complejo:
const dates=[
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title:'Cita de trabajo',
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 30),
        title:'Cita con mi Jefe'
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title:'Cena'
    },
]

const newAppointment={
    startDate:new Date(2021, 1, 1, 7, 30),
    endDate: new Date(2021, 1, 1, 8, 30)
};

const { areIntervalsOverlapping } = require("date-fns")
const isOverlap=(newDate)=>{
    return dates.some(date=>{
        return areIntervalsOverlapping(
            {start:date.startDate, end:date.endDate},
            {start:newDate.startDate, end:newDate.endDate}
        )
    })
}
console.log('is Overlap?:', isOverlap(newAppointment));