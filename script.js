'use strict'

$(document).ready(function(){

    const timerSection = $('#timerSection');
    const resultSection = $('#resultSection');
    const flipBtn = $('#flipBtn');
    
    let hideContent = () =>{
        timerSection.text('');
        resultSection.text('');
    }

    let HeadsorTails = () => {

        let randomNumber = Math.floor((Math.random() * 2) + 1);
        return randomNumber%2==0? 'Heads' : 'Tails';
    };

    let initiateCountdown = () => {

        hideContent();
        let secsWait = [3,2,1]; 
        let i = 0; 
        let timeout = setInterval(()=>{

            timerSection.html(`<div class="timer-section" id="timerSection">
                Showing results in
                <h1 id="timer">${secsWait[i]}</h1>
              </div>`);

            if(i==3){
                clearInterval(timeout);
                i = 0;
                return;
            }
            i++;

        }, 1000);
    };

    let displayResult = ()=>{

        initiateCountdown();
        setTimeout(()=>{
            
            hideContent();
            resultSection.html(`<h1 id="result">--&gt; ${HeadsorTails()} &lt;--</h1>`)

        },4000);

    };


    let flip = () => {
        console.log('Mr.Coin is ready!');

        hideContent();
        flipBtn.click(()=> displayResult());

    };

    flip();

});