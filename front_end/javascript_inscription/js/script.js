const signupForm = document.querySelector('#signup-form')
const checkbox = document.querySelector('#cgu')
const formMessage = document.querySelector('#form-message')
const username = document.querySelector('#username')
const profil = document.querySelector('#profile')

username.addEventListener('input', (event)=> {
    nom = event.target.value.trim() //trim - supprimer les espaces
})

profil.addEventListener('input', (event)=> {
    choix = event.target.value
})

signupForm.addEventListener( 'submit', (event)=>{
event.preventDefault(); // prevent de rechargeer la page
// afficher dans la zone de message bonjour + nom

formMessage.classList.remove('hidden') //affiche le message

if (!checkbox.checked || !nom) {
    formMessage.style.color = "red"
    formMessage.textContent ="Veuillez remplir tous les champs et accepter les CGU"
} else {
    if (nom.length < 6){
        formMessage.textContent ="Votre nom est trop court"
        formMessage.style.color = "red"
    } else {
    formMessage.textContent = "Merci " +nom+ ", votre inscription est validée ! Votre parcours est " +choix+ " !"
    formMessage.style.color = "green"
    }
}
})