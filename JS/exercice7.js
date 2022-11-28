function calcul(){

    temps = parseInt(document.getElementById("information").value);
            heures = Math.floor(temps/3600);
            temps = temps%3600;
            minutes = Math.floor(temps/60);
            temps = temps%60;
            secondes = temps;
            document.getElementById("resultati").innerHTML=heures +" heures" + minutes + 
            " minutes" + secondes + " secondes.";
    
    }
    
