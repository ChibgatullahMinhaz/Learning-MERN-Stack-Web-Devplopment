function show(){
    document.getElementById('spiner').style.display = 'block'

}
function hide(){
    document.getElementById('spiner').style.display = 'none'

}

const fetData = async ()=>{
    try {
        show()
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    document.getElementById('data').innerText = data.title
    return data
    } catch (error) {
        
    }finally{
        hide()
    }
}
fetData()