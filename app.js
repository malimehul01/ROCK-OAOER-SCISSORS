let  userscore=0;
let  compscore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let ucount=document.querySelector("#ucount");
let comcount=document.querySelector("#ccount");


const showWinner=(userwin,userchoice,compchoice)=>{

   if(userwin==true){

    console.log("you win");
    msg.innerHTML=`You win ! your ${userchoice} beats ${compchoice}`;
   userscore++;
   ucount.innerHTML=userscore;
   msg.style.backgroundColor="green";

    
    
   }
   else{


    console.log("you lose");

    msg.innerHTML=`computer is win ${compchoice} beats  your ${userchoice}`;
    compscore++;
    comcount.innerHTML=compscore;
    msg.style.backgroundColor="red";
   }
}



const drawgame=()=>{


    
    msg.innerHTML="Game is draw play again";
    msg.style.backgroundColor="#081b31";
    



}






const gencompchooice=()=>{

   const opt=["rock","paper","scissors"];
   const rndidx=Math.floor(Math.random()*3);

   return opt[rndidx];

}

const playgame=(userchoice)=>{



     const compchoice=gencompchooice();
     

    if(userchoice==compchoice){

        drawgame();
    }
    else{

            let userwin=true;
         if(userchoice==="rock"){
           //sejor,paper
            userwin= compchoice==="paper" ? false:true;


         } 
         else if (userchoice==="paper"){
              //sejor,rock
            userwin=compchoice==="scissors"?false:true;
         }
         else{

            //rock,paper

            userwin=compchoice=="rock"?false:true;
         }
             
         showWinner(userwin,userchoice,compchoice);
         
    }
}
choices.forEach((choice)=>{



    choice.addEventListener("click",()=>{

      const userchoice=choice.getAttribute("id");
    
       playgame(userchoice);


    })






})