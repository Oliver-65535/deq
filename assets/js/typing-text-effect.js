var i = 0;
var txt = ['F','Fu','Fut','Futu','Futur','Future','Future','Future','Future','Future','Future','Future','Future','Future','Future','Future','Future','Future','Futur','Futu','Fut','Fu','F','','','','','','','','','','','','','','',''];
var speed = 300;

function typeWriter() {
  setInterval(
    ()=>{if (i > txt.length-1) i=0; 
        document.getElementById("demo").innerHTML = txt[i];
        i++;
    },speed)
    
}

typeWriter()