const quizz = document.querySelector("#quizz")
const messageResultat = document.querySelector('#message-resultat')
const correctAnswers = {
    question1: 'b',
    question2: 'c',
    question3: 'css'
}

quizz.addEventListener ('submit', (event)=> {
    event.preventDefault()
    messageResultat.className = "message"

    const userAnswers = {
    question1: quizz.elements['question1'].value,
    question2: quizz.elements['question2'].value,
    question3: quizz.elements['question3'].value.trim().toLowerCase()
    }

    if(!userAnswers.question1 || !userAnswers.question2 || !userAnswers.question3) {
        messageResultat.textContent = "Veuillez répondre à toutes les questions."
        messageResultat.classList.add("wrong")
        messageResultat.classList.remove('hidden')
        return
    }

    let score = 0;

    if (userAnswers.question1 === correctAnswers.question1) score++;
    if (userAnswers.question2 === correctAnswers.question2) score++;
    if (userAnswers.question3 === correctAnswers.question3) score++;

    if (score == 3) {
        messageResultat.textContent = "Bravo ! Score parfait : 3 / 3"
        messageResultat.classList.add("perfect")
    } else if (score == 0) {
        messageResultat.classList.add("wrong")
        messageResultat.textContent = "Dommage... Votre score : 0 / 3. Retentez !"

    } else {
        messageResultat.classList.add("notperfect")
        messageResultat.textContent = "Presque ! Votre score : " +score+ " / 3."
    }

    messageResultat.classList.remove('hidden')

} )