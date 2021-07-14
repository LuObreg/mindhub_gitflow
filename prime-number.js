//Programa que determina si un número es o no primo
var isPrime = (x) => {
    var track = 0;

    for (let i = 1; i <= x; i++){
        if (x % i == 0){
            track++;
        }
    }
    return track <= 2;
}; 

console.log(isPrime(11));