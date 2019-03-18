// asis : [1,2,3,4,5], 2 tobe: [[1,2],[3,4],[5]];
//use while
function chunkArray(array, size) {
    let result = [];
    let arrayCopy = [...array];
    while(arrayCopy.length > 0){
        result.push(arrayCopy.splice(0,size));
    }

    return result;
}


module.exports = chunkArray