
function primeFactors(n) {
    var result = [];
    // n이 2로 나눠진다면 나눠질수 있을때까지 계속 나누고
    while(n%2 == 0){
        if(result.indexOf(2) == -1){
            result.push(2);
        }
        n = n/2
    }

    for(var i = 3; i*i <=n; i = i+2){
        while(n%i == 0){
            n = n/i;
        }
    }
    if(n > 2){
        result.push(n);
    }
    return result;
}

module.exports = primeFactors