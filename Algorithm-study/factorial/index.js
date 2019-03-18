// function factorial(n) {
//     if(n === 0){
//         return 1;
//     }
//     return n * factorial(n-1);
// }

function factorial(n) {
    var result = n;
    if(n <= 1) {
        return 1;
    }
    while(n > 1){
        n--;
        result *= n;
    }
    return result;
}

module.exports = factorial