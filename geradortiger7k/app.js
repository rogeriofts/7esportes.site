let button = document.getElementById('geradorbotao');
let output = document.getElementById('entrada');
let output2 = document.getElementById('turbo');
let output3 = document.getElementById('validade');
const whatsAppBanner = document.getElementById("whatsapp");

function getRandomNumber(min, max) {
    let step2 = (Math.random() * (max - min + 1) + min);
    let result = Math.floor(step2);
    return result;

}

button.addEventListener('click', (e) => {
    e.preventDefault();
    button.disabled = true;
    output.innerText = getRandomNumber(5, 10); // Normal
    output2.innerText = getRandomNumber(5, 10); // Turbo
    output3.innerText = updateTime(); // Validade
    countdown(60);
})

function getRandomNumber(min, max) {
    let step3 = (Math.random() * (max - min + 1) + min);
    let result = (Math.floor(step3) + 'X');
    return result;
}

function countdown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
        button.innerHTML = 'AGUARDE (' + counter + 's...)';
        counter--;

        if (counter < 0) {
            clearInterval(interval);
            button.disabled = false;
            button.innerHTML = 'GERAR NOVO SINAL';
        }
    }, 1000);
}

function updateTime() {
    let time = dayjs();
    let newTime = time.add(2, 'm');
    return (newTime.format("HH:mm"));
}
