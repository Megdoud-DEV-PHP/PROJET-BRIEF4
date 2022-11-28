
function calcul(){
    var note1 = document.getElementById("information").value;
    var note2 = document.getElementById("information1").value;
    var note3 = document.getElementById("information2").value;
    var note1 = parseInt(note1);
    var note2 = parseInt(note2);
    var note3 = parseInt(note3);
    var moyenne = (note1 + note2 + note3)/3;
    document.getElementById("resultati").innerHTML="la moyenne est "+moyenne;
    }
