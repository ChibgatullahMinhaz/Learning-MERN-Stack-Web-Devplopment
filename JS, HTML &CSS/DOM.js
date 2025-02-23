const cliked = document.getElementById("click");
cliked.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'red'
})

function  makeRed(event) {
    document.body.style.backgroundColor = 'red'
}
function makeBlue (event){
    document.body.style.backgroundColor = "blue"
}
document.getElementById('makeSkay').addEventListener('click', 
    function makeSkay (event) {
  document.body.style.backgroundColor = 'skyblue'  
})