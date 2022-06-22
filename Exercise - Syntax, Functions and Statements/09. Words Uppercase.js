function toUpper(str_input) {
    let getWords = str_input.match(/[\w]+/g).join(", ").toUpperCase()
    console.log(getWords);
}

toUpper('Hi, how are you?')