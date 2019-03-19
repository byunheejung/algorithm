// function longestWord(text) {
//     let maxLength = 0;
//     let copyText = text.split(' ');
//     let result = '';
//     for(let i = 0; i < copyText.length; i++) {
//         if(copyText[i].length > maxLength) {
//             maxLength = copyText[i].length;
//             result = copyText[i];
//         }
//     }
//     return result;
// }

// 2. reduce use
function longestWord(text) {
    let result = text.split(' ').reduce((stringA, stringB) => {
        if(stringA.length > stringB.length){
            return stringA;
        }else {
            return stringB;
        }
    }, '');

    return result;
}

// 3. sort use
// function longestWord(text) {
    
// }
module.exports = longestWord