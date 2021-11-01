
let email = document.getElementById("email")
let hidden = document.getElementById("hidden")
let subscribe = document.getElementById("subscribe")

function getEmail() {
    console.log(email.value)
    hidden.style.display = "block"
    subscribe.style.display = "none"

}
function getConfirm() {
    console.log("This is the way!")
    hidden.style.display = "none"
    subscribe.style.display = "block"

}