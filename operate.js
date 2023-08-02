const questions = [
  {
    question: "What is the capital of France?",
    options: {
      A: "Paris",
      B: "London",
      C: "Rome",
      D: "Madrid",
      correct: "A",
    },
  },

  {
    question: "Who painted the Mona Lisa?",
    options: {
      A: "Leonardo da Vinci",
      B: "Vincent van Gogh",
      C: "Pablo Picasso",
      D: "Michelangelo",
      correct: "B",
    },
  },

  {
    question: "Which planet is known as the Red Planet?",
    options: {
      A: "Mars",
      B: "Jupiter",
      C: "Saturn",
      D: "Venus",
      correct: "C",
    },
  },
  {
    question: "What is the largest ocean on Earth?",
    options: {
      A: "Pacific Ocean",
      B: "Atlantic Ocean",
      C: "Indian Ocean",
      D: "Arctic Ocean",
      correct: "D",
    },
  },

  {
    question: "What is the chemical symbol for gold?",
    options: {
      A: "Au",
      B: "Ag",
      C: "Pt",
      D: "Hg",
      correct: "A",
    },
  },
];
//---------------Main logic of question view on the page------------
let index = 0;
const data = questions[index];
//--------------function to render question------------------

function RenderQuestion() {
  let localdata = questions[index];
  let questionId = document.getElementById("questionId");
  const optionsId = document.getElementsByClassName("answerValue");
  questionId.innerText = `${index + 1}.  ${localdata.question}`;
  optionsId[0].innerText = localdata.options.A;
  optionsId[1].innerText = localdata.options.B;
  optionsId[2].innerText = localdata.options.C;
  optionsId[3].innerText = localdata.options.D;
}
RenderQuestion();
//-------------On Select the Options---------
function OnSelectOption() {
  var radioButtons = document.getElementsByName("answers");
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      var selectedOption = radioButtons[i].value;
      if (selectedOption === data.options.correct) {
        console.log("sahi hai");
        index++
        RenderQuestion();
        break;
      } else {
        console.log(selectedOption);
        console.log("galat hai");
        break;
      }
    }
  }
}
//--------to impliment reset operation to run itself after every submit-------
//--------to impliment right & wrong UI info system-------
//--------to access the option to change its color--------
//--------to impliment NEXT button---------------
//--------to impliment scorecard system -----------
