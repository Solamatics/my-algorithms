// Question: The Western Suburbs Crouquet Club has two Categories of membership, Senior and Open.
//They like your help with an application form that will tell prospective members which category
//they will be placed. To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// In this croquet club, handicaps ranges from -2 to +26; the better the player the lower the handicap.

//function 
const openOrSenior = (data) => {
    return data.map((item) => {
        if(item[0] >= 55 && item[1] > 7) {
            return "You are a senior"
        } else {
            return "You are a open"
        }
    })
};




//second solution 
const newOpenOrSenior = data => data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
//console.log(newOpenOrSenior ([[100, 70], [45, 6]]));


//object destructuring
let details = {
    name: "Olusola Afikode",
    age: 29,
    job: "Developer"
}

const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
}

//destructure user
const { department: { address: { street } } } = user;

//get dynamic name property
const getKeyValue = key => {
    const { [key]: returnValue } = user;
    return returnValue;
}

const { name, job, age } = details;


//array destructuring
const itemsNeed = ["Paste", "Bread", "Butter", "Battery"];

let [ basic, need ] = itemsNeed;

//console.log(`My name is ${name}, I am ${age} and I work as a ${job}`);
//console.log(getKeyValue("department"))
console.log(basic, need);


