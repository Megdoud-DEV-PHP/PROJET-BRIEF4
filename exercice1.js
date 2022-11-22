/* Application du java-script pour la page Exercice-1.html */


document.getElementById("execution").addEventListener("submit", function() {
    var vide;
    var information = document.getElementById("information");
    var information1 = document.getElementById("information1");
    var information2 = document.getElementById("information2");
    var messages = information.value + information1.value + information2.value;
    alert(messages);
   
   

})


   
