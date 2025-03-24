import '../App.css'
export default function Singer({singer}){
    const {name, age}= singer
    return (
        <div className='card' style={{
            marginBottom:'15px'
        }}>
            <h1>Name is: {name} </h1>
            <h1>Age is : {age}</h1>
        </div>
    )
} 
