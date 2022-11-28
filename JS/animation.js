

const questionContainer = document.querySelector(".click-event");
console.log(questionContainer);
const btn1 = document.querySelector("#btn-1");
const response = document.querySelector('h4');

btn1.addEventListener(//click event btn-1
'click', () => {
response.classList.add("show-response");
    
});
