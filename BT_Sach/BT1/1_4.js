function rotateString(str) {
    return str.slice(-1) + str.slice(0, -1);
}

let inputString = prompt("Nhap chupo can xoay: ");
let rotatedString = rotateString(inputString);
console.log('Chuoi sau khi xoay: ' + rotatedString);

function reverseString(str) {
    return str.split("").reverse().join("");
};

let reversedString = reverseString(inputString);
console.log("chuoi sau khi dao nguoc: " + reversedString)