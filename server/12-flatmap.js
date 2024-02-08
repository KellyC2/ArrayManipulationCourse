/**
Flatmap nos ofrece la posibilidade a aplanar nuestro arrary mientras lo va transformando
 */

const users=[
    {userId:1, username:'Tom', attributes:['Nice','Cute']},
    {userId:2, username:'Mike', attributes:['Lovely']},
    {userId:3, username:'Nico', attributes:['Nice','Cool']},
]
//DE este array de objetos solo quiero obtener un array de atributos.
const atributos=users.map(user=>user.attributes)
console.log(atributos);//[ [ 'Nice', 'Cute' ], [ 'Lovely' ], [ 'Nice', 'Cool' ] ]

//Me interesa tener un array de un solo nivel asi que podemos aplicar flat
const justOneLevel=atributos.flat()
console.log(justOneLevel);
//Nice, we did it, but it take lot of code lines and you can do it in just one line with flatmap()
const withFlatMap=users.flatMap(item=>item.attributes)
console.log('withFlatMap',withFlatMap);


//RETO: De este objeto de appoinments extrae solo las fechas de inicio de los appoinments y debe estar en un array lineal
const calendars = {
    primaryCalendar: [
        {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
        },
        {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
        },
        {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
        },
    ],
};

const myApoinments=Object.values(calendars).flat()
console.log('myApoinments',myApoinments);

const myStarDate= myApoinments.map(item=>item.startDate)
console.log('myStarDate', myStarDate);