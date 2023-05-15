//selecting our target 
let german = document.querySelector('.german');
let english = document.querySelector('.english');
let btn = document.querySelector('.btn');

//array of german and english words
const deEng = [
    {
        german: 'Es geht',
        english: "I'm all right"
    },

    {
        german: "Guten Tag",
        english: "Good Afternoon"
    },

    {
        german: "Wie geht's",
        english: "How are you?"
    },

    {
        german: "Super",
        english: "great"
    },

    {
        german: "Prost",
        english: "cheers"
    },

    {
        german: "Guten Morgen",
        english: "Good Morning"
    },

    {
        german: "Auf Wiedersehen",
        english: "goodbye"
    },

    {
        german: "Natürlich",
        english: "ofcourse"
    },
 
    {
        german: "Bis später",
        english: "see you later"
    },
    
    {
        german: "Guten Abend",
        english: "Good Evening"
    },
    
    {
        german: "Es tut mir leid",
        english: "I am sorry"
    },

    {
        german: "Entschuldingung",
        english: "excuse me / sorry"
    }
]

//eventlistener triggers the function when button is pressed
btn.addEventListener('click', function(){

    let randomIndex = Math.floor(Math.random()*deEng.length); //random number is calculated 
    
    german.innerText = deEng[randomIndex].german; // random number is used as index
    english.innerText = deEng[randomIndex].english; // random number is used as index

} )