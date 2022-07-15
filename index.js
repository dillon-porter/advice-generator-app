const adviceText = document.querySelector('.advice-text')
const adviceNumber = document.querySelector('.advice-id-number')
const dice = document.querySelector('.dice').addEventListener('click', getAdvice)

// Starts the app with getting a random advice quote.
window.onload = () => {
    getAdvice()
}

async function getAdvice() {
    const advicePromise = await fetch('https://api.adviceslip.com/advice')
    const advice = await advicePromise.json()
    adviceText.textContent = `${advice.slip.advice}`
    adviceNumber.textContent = `${advice.slip.id}`
}