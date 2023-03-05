const userName = 'BlackPink';
const userInput = 'Blackpink';
console.log(userName.toLowerCase())
console.log(userInput.toUpperCase())
console.log(userInput.toLocaleLowerCase())
if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('Valid User');
}
else {
    console.log('Invalid User');
}