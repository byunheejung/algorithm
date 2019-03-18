
function fibonacci(n) {
    if(n <= 1){
        return 1;
    }
    debugger;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
module.exports = fibonacci