function reverseString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;

}
const myString = 'I am a good person.';
const reversed = reverseString(myString);
console.log('Reverse Text:', reversed);
