alert("Hello from JS!");

// For each of the exercises below, assume you are starting with the following people array.

// const people = ["Greg", "Mary", "Devon", "James"];
// 1. Write the command to remove “Greg” from the array.
// 2. Write the command to remove “James” from the array.
// 3. Write the command to add “Matt” to the front of the array.
// 4. Write the command to add your name to the end of the array.
// 5. Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
// 6. Write the command that gives the indexOf where “Mary” is located.
// 7. Write the command that gives the indexOf where “Foo” is located (this should return -1).
// 8. Redefine the people variable with the value you started with. Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done [“Greg”, “Mary”, “Elizabeth”, “Artie”, “James”].
// 9. Create a new variable called withBob and set it equal to the people array concatenated with the string of “Bob”.

let people = ["Greg", "Mary", "Devon", "James"];

// 1.
people.shift();
// people = ["Mary", "Devon", "James"]

// 2.
people.pop();
// people = ["Mary", "Devon"]

// 3.
people.unshift("Matt");
// people = ["Matt", "Mary", "Devon"]

// 4.
people.push("Sophia");
// people = ["Matt", "Mary", "Devon", "Sophia"]

// 5.
people.slice(2);

// 6.
people.indexOf("Mary");

// 7.
people.indexOf("Foo");

// 8.
let people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Article");

// 9.
let withBob = people.concat("Bob");





