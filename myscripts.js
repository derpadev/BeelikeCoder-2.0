var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

//word bank
words[1] = "Tomorrow is a new day"
words[2] = "Making mistakes is part of life"
words[3] = "Saying no is okay"
words[4] = "Not everyone has to like you"
words[5] = "Beauty & strength come from within"
words[6] = "Alone time is good for the soul"
words[7] = "You are in control of your thoughts"
words[8] = "The past cannot be changed"
words[9] = "Opinions don't define your reality"
words[10] = "Strive for progress, not perfection"
words[11] = "Happiness is found within"
words[12] = "Fear kills more dreams than failure ever will"
words[13] = "Be so good they can't ignore you"
words[14] = "Success is the sum of small efforts repeated"
words[15] = "Judgements are confefssion of character"
words[16] = "Showing emotions is healthy and okay"
words[17] = "You don't have to be perfect"
words[18] = "Having a bad day is ok"
words[19] = "Small steps are also progress"
words[20] = "Asking for help is strength"
words[21] = "Life is tough, but so are you"
words[22] = "People love and appreciate you"
words[23] = "Everyone's journey is different"
words[24] = "Don't be afriad of change"
words[25] = "Love with all your heart"
words[26] = "You only fail if you quit"
words[27] = "You're allowed to change your plans"
words[28] = "You don't have to be happy all the time"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}