let organizer =confirm("shall we play rock,paper,scissor game?");
if(organizer){
    let playerChoice=prompt("please enter rock or paper or scissors");
    if(playerChoice){
        let player=playerChoice.trim().toLowerCase();
        if(player==="rock" ||
            
           player==="paper" ||
           player==="scissors"
        ){
            let computerChoice=Math.floor(Math.random()*3+1);
            let computer=computerChoice===1?"rock"
                :computerChoice===2?"paper"
                :"scissors";
                
            let result=player===computer?"Tie"
            :player==="rock"&&computer=="paper"
            ?`player:${player}\n computer:${computer}\n Computer wins`
            :player==="scissors"&&computer=="rock"
            ?`player:${player}\n computer:${computer}\n Computer wins`
            :player==="paper"&&computer=="scissors"
            ?`player:${player}\n computer:${computer}\n Computer wins`
            : `player: ${player}\nComputer: ${computer}\n Player wins`;

            alert(result);

            let playAgain = confirm("play again???!");
            playAgain? location.reload(): alert("Thank uuuu");
        

        } else{
            alert("please enter the correct word");
        }

    }else{
        alert("i think u are not willing, thank you ");
    }
} else{
    alert("next time");
}