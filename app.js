//callback function to add cute symbols to the end of a string
function cutify(words, callback) {
    console.log("ur old string: " + words)
    console.log("ur new string: " + callback(words))
    return callback(words)
}

//function to add cute symbols to either side of sentence
function addCuteness(words) {
    return "uwu <3 " + words + " :3 <3"
}
//sentence to cutify
let sentence = "today is a wonderful day!"

console.log(cutify(sentence, addCuteness))
