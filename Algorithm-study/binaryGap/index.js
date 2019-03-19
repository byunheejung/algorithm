function binaryGap(n) {
    let maxLength = 0;
    let count = 0;
    var binary = Number(n).toString(2);
    for(var i = 0; i < binary.length; i++){
        if(binary[i] == 0){
            count++;
        }else{
            if(count > maxLength){
                maxLength = count;
            }
            count = 0;
        }
    }
    return maxLength;
}

module.exports = binaryGap