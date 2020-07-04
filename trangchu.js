const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const container = document.getElementById('ques-container')
const questionsElement = document.getElementById('ques')
const answerButtons = document.getElementById('ans')
const quiz = document.getElementById('quiz')
let shuffleQues, currentQues

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', () => {
    currentQues++
    nextQues()
})

function startGame() {
    startButton.classList.add('hide')
    shuffleQues = quest.sort(() => Math.random() - .5)
    currentQues = 0
    container.classList.remove('hide')
    nextQues()
}

function nextQues() {
    resetState()
    showQues(shuffleQues[currentQues])
}

function showQues(quest) {
    questionsElement.innerText = quest.question
    quest.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        } 
        button.addEventListener('click',selectAns) 
        answerButtons.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(quiz)
    nextButton.classList.add('hide')
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAns(e) {
    const selectedButton = e.target 
    const correct = selectedButton.dataset.correct
    setStatusClass(quiz, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQues.length > currentQues + 1 ) {
        nextButton.classList.remove('hide')
    } else {
            startButton.innerText = 'RESTART'
            startButton.classList.remove('hide')
        }
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const quest = [
    {
        question: 'Theo bạn, chu trình dưỡng da như thế nào là hợp lý?',
        answer: [
            {text: 'Rửa mặt, nước hoa hồng, kem dưỡng trắng, serum cấp ẩm', correct: false},
            {text: 'Tẩy trang, rửa mặt, nước hoa hồng, kem dưỡng trắng, serum cấp ẩm', correct: true},
            {text: 'Kem dưỡng trắng, tẩy trang,serum cấp ẩm, rửa mặt, nước hoa hồng',  correct: false},
            {text: 'Nước hoa hồng, tẩy trang, serum cấp ẩm, rửa mặt', correct: false},
        ]
    },
    {
        question: 'Trong mùa đông trời ít nắng, chúng ta có nhất thiết phải sử dụng kem chống nắng không ?',
        answer: [
            {text: 'Chỉ cần dùng vào hôm nào trời nắng nhiều', correct: false},
            {text: 'Không cần vì da mình trắng sẵn', correct: false},
            {text: 'Không cần thiết', correct: false},
            {text: 'Có', correct: true},
        ]
    },
    {
        question: 'Bao nhiêu tuổi thì nên bắt đầu dùng serum',
        answer: [
            {text: 'Từ 15 tuổi', correct: false},
            {text: 'Từ 18 tuổi', correct: false},
            {text: 'Từ 20 tuổi', correct: true},
            {text: 'Từ 25 tuổi', correct: false},
        ]
    },
    {
        question: 'Đâu không là sản phẩm thiên nhiên',
        answer: [
            {text: 'Yves Rocher', correct: false},
            {text: 'Kylie Skin', correct: true},
            {text: "Kiehl's", correct: false},
            {text: 'Innisfree', correct: false},
        ]
    },
    {
        question: 'Có mấy loại da cơ bản',
        answer: [
            {text: '4', correct: true},
            {text: '5', correct: false},
            {text: '3', correct: false},
            {text: '2', correct: false},
        ]
    }
]