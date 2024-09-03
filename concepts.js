const users = [
    {id: 1, name: 'Jack', isActive: true},
    {id: 2, name: 'John', isActive: true},
    {id: 3, name: 'Mike', isActive: false},
    ]


const names = users.map((user)=>user.name)

constisActiveUsers = users.filter((user)=>user.isActive).map(user=>user.name)

const sorted_names = users
                        .sort((user1, user2)=>(user1.age<user2.age?1:-1))
                        .filter((user)=>user.isActive)
                        .map(user=>user.name);

let var1;
console.log(var1);
console.log(typeof var1);

//The declarations of your variables always bubble to the top - hoisting

console.log(foo);
foo = 1;
//error

//foo is not defined

console.log(foo);
var foo = 1;
//undefined - no error
//foo is defined

var foo;
foo = 3;
console.log(foo);


foo = 3;
console.log(foo);
var foo;

//both are 3 var foo bubbles to top

//const and let don't bubble to top

/**Closures
 * closures give access to outer functions scope from inner functions
 */

const privateCounter = () =>{
    let count = 0
    //count is closure

    return {
        increment: (val=1)=>{
            count+=val;
        },
        getValue: ()=>{
            return count;
        }
    }
}

const counter = privateCounter();
console.log(counter.getValue()); // 0
counter.increment();
console.log(counter.getValue()); // 1

//Create a function which stores a secret string inside which is not
//accessible but is returned only when we call this function.

const privateSecret=()=>{
    const secret = "foo";

    return ()=>secret;
}

const getSecret = privateSecret()
console.log(getSecret()) // 'secret'

const isNamExists = (name, users) => users.some((user)=>user.name===name)

const usersExist = (name, users) => {
    const index = users.findIndex((user)=>user.name===name);
    return index>=0;
    //const exist = users.find((user)=>user.name===name);
    //return Boolean(index);

}
