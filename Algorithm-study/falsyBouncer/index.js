function falsyBouncer(array) {
    let result = []

    for(value of array){
        if(value){
            result.push(value);
        }
    }
    return result;
}

function falsyBouncer(array){
    return array.filter((value) => {
        return Boolean(value);
    })
}

module.exports = falsyBouncer