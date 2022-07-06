var arrayOfQuotes = [
    {
        "author": "Jim Rohn",
        "quote" : "Beware of what you become in pursuit of what you want"
    },
    {
        "author": "Epictus",
        "quote" : "Its not what happens to you, but how you react to it that matters."
    },
    {
        "author": "Frank Sintra ",
        "quote" : "The best revenge is massive success"
    },
    {
        "author": "Wayne Grezty",
        "quote" : "You miss 100% of the shots you dont take"
    },
    {
        "author": "Nelson Mandela",
        "quote" : "Resentment is ike drinking poison and waiting for your enemies to die"
    },

      {
        "author": "Conficius",
        "quote" : "Silence is a true friend that never betrays"
    },
    {
        "author": "Elbert Habbard",
        "quote" : "Do not take life too seriously, you wont get out alive"
    },
    {
        "author": "Lyndon B .Johnson",
        "quote" : "Yesterday is not ours to recover, but tomorrow is ours to win or lose"
    },
    {
        "author": "Henrick Ibsen",
        "quote" : "A thousand words cannot leave the same deep impression as a sinlge deed"
    },
    {
        "author": "Katherine Pearson",
        "quote" : "A dream without a plan is nothing more than a wish"
    } 

]
function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);

}
function generateQuote() {

    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("qouteOutput").InnerHtml = '"' + arrayOfQuotes [randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML = '-' + arrayOfQuotes[randomNumber].number  ;
}

 