// asis : i am a student , tobe: I Am A Student
// use foreach
function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    let capsArray = []

    wordsArray.forEach(word => {
        capsArray.push(word[0].toUpperCase() + word.slice(1))
    });

    return capsArray.join(' ')
}

//use map
function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ');
    let capsArray = wordsArray.map( word => {
        return word.replace(word[0], word[0].toUpperCase());
    });

    return capsArray.join(' ');
}

module.exports = capSentence