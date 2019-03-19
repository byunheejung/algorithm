function isAnagram(stringA, stringB) {

    function compareString(text){
        let charMap = {};

        for(let char of text){
            if(charMap.hasOwnProperty(char)){
                charMap[char]++;
            } else {
                charMap[char] = 1;
            }
        }
        return charMap;
    }

    if(stringA.length == stringB.length){
        let compareAstr = compareString(stringA);
        let compareBstr = compareString(stringB);
        
        for(let char in compareAstr){
            if(compareAstr[char] !== compareBstr[char]){
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}


module.exports = isAnagram