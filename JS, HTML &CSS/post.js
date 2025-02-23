let container = document.getElementById('postContainer');


document.getElementById('btn').addEventListener('click', function (event) {
    const inputValue = document.getElementById('inputComment').value;
    const post = document.createElement('p');
    post.classList.add('postContainer');
    post.innerText = inputValue;
    console.log(inputValue)
    container.appendChild(post)
})
// desabled button 

document.getElementById("deletInput").addEventListener('keyup', function (event) {
    const value = event.target.value;
     if (value === 'delete') {
         document.getElementById('Deletbtn')
             .removeAttribute('disabled');
     }else{
         document.getElementById('Deletbtn')
         .setAttribute('disabled', true);
     }

})