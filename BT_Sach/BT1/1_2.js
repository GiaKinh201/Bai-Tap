function isPrime(number) {
    if (number <=1 ) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

let num = parseInt(prompt('Nhap mot so: '));
if (isPrime(num)) {
    console.log(num + " la so nguyen to.")
} else {
    console.log(num + " khong la so nguyenn to")
}