const quizData = [
    {
        question: "How satisfied were you with the templates provided ?",
        a: "Very Satisfied",
        b: "Satisfied",
        c: "Dissatisfied",
        d: "Very Dissatified",
        correct: "d",
    },
    {
        question: "Did this website help you?",
        a: "Very helpful",
        b: "helpful",
        c: "not helpful",
        d: "useless",
        correct: "b",
    },
    {
        question: " How did you hear about us?",
        a: "friend",
        b: "social media",
        c: "advertisement",
        d: "others",
        correct: "a",
    },
    {
        question: " How easy was it to use our website?",
        a: "difficult",
        b: "moderate",
        c: "easy",
        d: "very easy",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Thank You for your valuable feedback.</h2>
            `
        }
    }
})


                //  <button onclick="location.reload()">Reload</button>