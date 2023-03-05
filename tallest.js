function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element
        }
    }
    return largest;
}
// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('Tallest person is: ', tallest);

function lowestNumber(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}
const heights = [167, 190, 120, 165, 137, 110];
const lowest = lowestNumber(heights);
console.log('Lowest person is: ', lowest);