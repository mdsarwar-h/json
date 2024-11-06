
/*
let user = {
    name: "John",
    age: 30,

    toString() {
        return `{name: "${this.name}", age: "${this.age}"}`
    }
};

alert(user);
*/

/*.......................................*/
// JSON.stringify

/*
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

alert(typeof (json));

alert(json);
*/

/*
let room = {
    Number: 23,
};

let meetup = {
    title: 'Conference',
    participants: ["john", "ann"],
};

meetup.place = room;        // meetup references room
room.occupiedBy = meetup;   // room references meetup

let json = JSON.stringify(meetup); // Error: Converting circular structure to JSON
alert(json);
*/

/*.......................................*/
// JSON.parse

let numbers = "[0, 5, 2, 3]";

numbers = JSON.parse(numbers);

alert(numbers[1]); //1





