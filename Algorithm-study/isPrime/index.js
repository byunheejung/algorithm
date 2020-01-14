// 숫자가 소수인지 알아보는 방법은 숫자 n을 2부터 n-1까지의 수로 나눠 나머지가 0인지 확인하면 된다.
// 소수 : 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수.
// function isPrime(n) {
//     // 만약에 숫자 n이 1보다 작다면 너는 소수가 아니야
//     if(n<=1){
//         return false;
//     }
//     // ex) n == 3 이면 2까지 돌고 땡 
//     for(var i = 2; i<n; i++){
//         if(n%i == 0){
//             return false;
//         }
//     }
//     return true;
// }
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31
// 소수의 규칙 2와 3을 제외하고는 모든 소수는 6k+-1 형태를 지닌다.
function isPrime(n) {
    debugger;
    if(n<=1) return false;
    if(n<=3) return true;
    if(n%2 == 0 || n%3 == 0) return false;

    for(var i = 5; i*i<=n; i=i+6){
        if(n%i == 0 || n%(i+2) == 0)
        return false;
    }
    return true;
}

module.exports = isPrime