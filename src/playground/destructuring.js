// const person = {
//     name: 'Olivia',
//     age: 31,
//     location: {
//         city: 'Los Angeles',
//         temp: 88
//     }
// };

// const {name: firstName = 'Ananymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = "Self-Published"} = book.publisher;

console.log(publisherName);

