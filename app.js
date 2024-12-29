let toggleState = true; // This will keep track of the toggle state

const toggleButton = document.querySelectorAll(".toggleButton");
const a1=document.querySelector("#a1");
const a2=document.querySelector("#a2");
const a3=document.querySelector("#a3");
const a4=document.querySelector("#a4");
const a5=document.querySelector("#a5");
const a6=document.querySelector("#a6");
const a7=document.querySelector("#a7");
const a8=document.querySelector("#a8");
const a9=document.querySelector("#a9");
const result=document.querySelector(".result");

const winningCombos = [[a1, a2, a3],
[a1, a4, a7],[a1, a5, a9], [a2, a5, a8],  [a3, a6, a9],
[a3, a5, a7],[a4, a5, a6], [a7, a8, a9]];

 

function generate(value) {
    if (toggleState) {
        value.innerHTML="<h2>X</h2>" ;
    } else {
        value.innerHTML="<h2>O</h2>";
    }
    toggleState = !toggleState;// Toggle the state
};
function toggle(value){
    if(!value.classList.contains('disabled')){
        value.classList.add('disabled');
}

    // toggleButton.classList.toggle("disabled");
}
function gameover() {
    const allDisabled = Array.from(toggleButton).every(element =>
        element.classList.contains('disabled')
    );

    if (allDisabled) {
        result.innerHTML="<h1>GAME OVER</h1>";
    }

}

function winner(){
    winningCombos.forEach(combo => {
        if(combo[0].innerHTML && combo[0].innerHTML === combo[1].innerHTML && combo[1].innerHTML === combo[2].innerHTML  ){
            result.innerHTML=`<h3>WINNER IS:${combo[0].innerHTML}</h3>`;
            toggleButton.forEach(element => {
                element.classList.add('disabled');
            });
        }else if(combo[0].innerHTML && combo[0].innerHTML === combo[1].innerHTML && combo[1].innerHTML === combo[2].innerHTML){
            result.innerHTML=`<h3>WINNER IS:${combo[0].innerHTML}</h3>`;
            toggleButton.forEach(element => {
                element.classList.add('disabled');
    });
}
    });
}
function reset(){
    toggleButton.forEach(element => {
        element.innerHTML ="";   
        result.innerHTML="";    
         element.classList.remove('disabled');
    });
    toggleState = true;
}
