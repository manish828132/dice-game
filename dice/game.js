let head=document.querySelector("h1");

let images=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"] ;
function game_control()
{
    let ran1=Math.trunc(Math.random()*images.length);
    let ran2=Math.trunc(Math.random()*images.length);
    if(ran1>ran2)
    {
        head.textContent="🎈🎈🟠🔵✅ player 1 win ✅🟡🟣";
    }

   else if(ran1<ran2)
    { 
        head.textContent="🟠🔵✅ player 2 win ✅🟡🟣🎈🎈";
    }

    else{
        head.textContent="🟠🔵✅ match draw ✅🟡🟣";
    }

   document.querySelector(".dice1 img").setAttribute("src",images[ran1]);
   document.querySelector(".dice2 img").setAttribute("src",images[ran2]);
    
    console.log(ran1,ran2);
    
    

    
    
}
game_control();


