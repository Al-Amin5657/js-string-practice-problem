const jim = 77;
const dela = 88;
const chinku = 99;
function maxNum() {
    const maxNumber = Math.max(jim, dela, chinku);
    console.log(maxNumber);
}
maxNum();

function maxNumber(num1, num2, num3) {
    const max = Math.min(num1, num2, num3);
    console.log(max);

}
maxNumber(23, 45, 34);