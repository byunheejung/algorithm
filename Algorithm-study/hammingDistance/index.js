function hammingDistance(stringA, stringB) {
    let gapSize = 0;
    let compareText = stringA.length;
    if (stringA.length == stringB.length) {
        for(var i = 0; i < compareText; i++){
            if(stringA[i] != stringB[i]){
                gapSize ++;
            }
        }
        return gapSize;
    } else {
        throw new Error('글자수가 같지 않다.');
    }
}

module.exports = hammingDistance