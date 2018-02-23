var answers = [
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes Definitely",
"You may rely on it",
"As I see it, yes",
"Most Likely",
"Outlook Good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and Ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"
]


// ///////////////////////////////////////////////////////////////
//Random Answer function generator
var randoAnso = answers[Math.floor(Math.random()*answers.length)];




document.getElementById("findButton").onclick = function () {
    var typedText = document.getElementById("input").value;

    var spot = document.getElementById("wordsDiv");

        var store = randoAnso; {
            var span = document.createElement("span");
            var textContent = document.createTextNode(store + " ");
            span.appendChild(textContent);
            spot.appendChild(span);
        }
    }
