var i = 0;
var txt = ['Future','Wealth','Stability','Prosperity','SELF'];
var speed = 3000;

function typeWriter() {
  setInterval(
    ()=>{if (i > txt.length-1) i=0; 
        document.getElementById("demo").innerHTML = txt[i];
        i++;
    },speed)
    
}

typeWriter()