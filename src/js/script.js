const buttonUpdate = document.querySelector(".advice-update");
const adviceId = document.querySelector(".advice-id");
const adviceDescription = document.querySelector(".advice-description");

async function getRandomAdvice() {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    adviceContent = await response.json();

    adviceId.innerHTML = `advice #${adviceContent.slip.id}`;
    adviceDescription.innerHTML = adviceContent.slip.advice;
}

buttonUpdate.addEventListener("click", getRandomAdvice);

getRandomAdvice();