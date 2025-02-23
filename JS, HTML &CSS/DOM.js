const cliked = document.getElementById("click");
cliked.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red'
})

function makeRed(event) {
    document.body.style.backgroundColor = 'red'
}
function makeBlue(event) {
    document.body.style.backgroundColor = "blue"
}
document.getElementById('makeSkay').addEventListener('click',
    function makeSkay(event) {
        document.body.style.backgroundColor = 'skyblue'
        document.body.innerHTML = `
 <div className="divider">Default</div>
  `
    });
function updateNAme() {

    const updateValue = document.getElementById('updatebtn');

    updateValue.addEventListener('click', function
        (event) {
        const tile = document.getElementById('yourName');
        const titileValue = document.getElementById('nameValue').value;
        tile.innerText = titileValue;
    })
}
updateNAme()