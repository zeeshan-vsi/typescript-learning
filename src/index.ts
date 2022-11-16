type Name = string
type Age = number

interface User {
    name: Name,
    age?: Age,
    userName: string,
    city?: string,
    email: string,
    phone?: string,
    helloMessage():string
}

const getData=(firstName:string,lastName:string):string=>{
    return `${firstName} ${lastName}`
}

const user1:User ={
    name:"zeeshan",
    email:"zeeshan@gmail.com",
    userName:"zeeshanAwais",
    helloMessage(){
        return `hello ${this.name}`
    }
}

const usersArray:User[]=[
    {
        name:"zeeshan",
        email:"zeeshan@gmail.com",
        userName:"zeeshanAwais",
        helloMessage(){
            return `hello ${this.name}`
        }
    }
]

const pageNumber : string = '10'
const numericPageNumber : number = (pageNumber as unknown) as number
const someElement = document.getElementById('id') as HTMLInputElement
someElement.addEventListener('input',(event)=>{
    const target = event.target as HTMLInputElement
    console.log(target.value)
})

console.log(someElement.value)

console.log(user1.helloMessage())
console.log(getData('awais','zeeshan'))