// document.getElementById("execution").addEventListener("submit",function(){
//     const TVA = 1.186;
//     prixHT = parseInt(document.getElementById("information").value) ;
    
//     prixTTC = parseInt(prixHT) * TVA;
//     alert(prixTTC);
//     document.getElementById("francis").innerHTML= "bonjour" ;
    

// })

function calcul() {
    
    const TVA = 1.186;
    prixHT = parseInt(document.getElementById("information").value) ;
   
    
    
    prixTTC = parseInt(prixHT) * TVA;
    alert(prixTTC);
    document.getElementById("francis").innerHTML= prixTTC  ;

}

