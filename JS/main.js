var qoutes = [
  {
    qoute: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
    imageProfile: "./images/Oscar.jpg",
  },

  {
    qoute:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
    imageProfile: "./images/albert.jpg",
  },

  {
    qoute:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
    imageProfile: "./images/Bernard.jpg",
  },

  {
    qoute:
      "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
    author: "― William W. Purkey",
    imageProfile: "./images/william.jpg",
  },

  {
    qoute:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "― Dr. Seuss",
    imageProfile: "./images/suess.jpg",
  },

  {
    qoute:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "― Robert Frost",
    imageProfile: "./images/robert.jpg",
  },
];

// with bonus
var profilePhoto = document.getElementById("profileImage");
var quoteLine = document.getElementById("QouteLine");
var AuthorLine = document.getElementById("AuthorLine");

var random = 0;

function generateQoute() {
  var randomNumber;
  do {
    var randomNumber = Number(
      Math.floor(Math.random() * (qoutes.length - 0) + 0)
    );
  } while (randomNumber == random);
  random = randomNumber;
  console.log(random);

  profilePhoto.src = qoutes[random].imageProfile;
  AuthorLine.innerHTML = qoutes[random].author;
  quoteLine.innerHTML = qoutes[random].qoute;
}

function showDiv() {
  document.getElementById("qouteDiv").style.display = "block";
}

// without the bonus

// function generateQoute(){
//     var randomNumber = Number( Math.floor(Math.random() * (qoutes.length - 0) + 0) );

//         document.getElementById("QouteLine").innerHTML = qoutes[randomNumber].qoute;
//         document.getElementById("AuthorLine").innerHTML = qoutes[randomNumber].author;

// }
