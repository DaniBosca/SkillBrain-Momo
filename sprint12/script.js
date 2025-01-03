const adviceID = document.getElementById("advice-id");
const textAdvice = document.getElementById("advice-text");
const button = document.getElementById("dice-button");

const setAdviceText = (text) => textAdvice.textContent = text;
const setAdviceId = (id) => adviceID.textContent = "ADVICE #" + id;

async function tellRandomAdvice() {
    const url = "https://api.adviceslip.com/advice";

    try {
        const response = await fetch(url);
        const data = await response.json();

        const text = '"' + data.slip.advice + '"';
        const id = data.slip.id;

        setAdviceText(text);
        setAdviceId(id);
    } catch (e) {
        console.error(e);
        setAdviceText("Oops! Something went wrong.");
        setAdviceId("");
    }
}

button.addEventListener('click', tellRandomAdvice);