function showPrimes(n){
    for(let i=2; i < n; i++){
        if(!isPrime(i)) continue;
        primenumber.push(i);
    }
    alert("For n = prime numbers are "+primenumber)
}

function isPrime(n) {
    for(let i=2; i<n; i++){
        if(n%i == 0) return false;
    }
    return true;
}

let number = prompt("Enter a positive integer")
const primenumber = [];

while(true){
    if(number < 0 || isNaN(number) || number%1 != 0 || !number){
        number = prompt("Enter a positive integer")
    }
    else if (number > 1){
        showPrimes(number);
        break;
    }
    else if(number = 1){
        alert("1 is neither prime nor composite number.")
        break
    }     
}
