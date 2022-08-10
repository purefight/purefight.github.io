// function showPrimes(n){
//     for(let i=2; i < n; i++){
//         if(!isPrime(i)) continue;
//         primenumber.push(i);
//     }
//     alert("For n = prime numbers are "+primenumber)
// }

// function isPrime(n) {
//     for(let i=2; i<n; i++){
//         if(n%i == 0) return false;
//     }
//     return true;
// }

function average(n) {
    var sum = 0
    for(let i=0; i<list1.length; i++){
        sum = Number(list1[i]) + Number(sum)
        average = sum / list1.length;
    }
    minNum = Math.min.apply(Math, list1);
    maxNum = Math.max.apply(Math, list1);
    let check = list1[0] < 0 ? 
          () => alert("For the list that is empty,the  average is " + 0 + ", the minimum is " + 0 + ", and the maxinum is " + 0): 
          () => alert("For the list "+ list1 + "average is " + average + " , the minimum is " + minNum + ", and the maxinum is " + maxNum);
    check();

    // console.log("Sum = " + sum);
    // console.log("average = " + average);
    // console.log("lengr = " + list1.length);
    // console.log("List = " + list1);
}

const list1 = [];
let number = prompt("Enter an integer (a negative integer to quit):")
list1.push(number);

while(true){
    if(number > 0 || isNaN(number) || number%1 != 0 || !number){
        number = prompt("Enter an integer (a negative integer to quit):")
        if(number > 0){
            list1.push(number);
        }
        //console.log("M = " + m )
    }
    else if (number < 0){
        average(number);
        break;
    }     
}
