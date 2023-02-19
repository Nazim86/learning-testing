type LocalCityType = {
    title: string
    countryTitle:string
}
type AdressType = {
    streetTitle: string
    city: LocalCityType
}
type TechType = {
    id:number
    title: string
}
export type StudentType = {
    id: number
    name:string
    age: number
    isActive: boolean
    address:  AdressType
    technologies: Array<TechType>
}

 export const student: StudentType = {
    id: 1,
    name:"Nazim",
        age: 32,
        isActive:false,
        address:{
        streetTitle: "M.M.Rasulzade",
            city:{
            title: "Baku",
                countryTitle:"Azerbaijan"
            }
        },
    technologies:[
        {
            id: 1,
            title: "HTML"
        },

        {
            id: 2,
            title: "CSS"
        },

        {
            id: 3,
            title: "React"
        }
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)

// const supermarket = {
//     products: {
//         dairy:["milk","egg","qatiq"],
//         fruits:{
//             tropicFruits:["lemon", "orange","banana"],
//             summerFruits:["alca","gilas","gilanar"],
//             vegetables:["xiyar", "badimcan","kelem"]
//         },
//         cleaning:{
//             homeCleaning:['floor reagent', "iv pole"],
//             windowCleaning:["window spray"],
//             ovenCleaning: "Gel"
//         }
//
//     },
//     service:{
//         clientService: "cart",
//         bonus: "Umico"
//     }
// }

