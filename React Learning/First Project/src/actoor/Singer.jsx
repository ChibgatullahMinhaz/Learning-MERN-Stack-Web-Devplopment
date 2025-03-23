import '../App.css'
export default function Singer(props){
    const {singer}= props
    return (
        <div className='card' style={{
            marginBottom:'15px'
        }}>
            <h1>Name is: {singer.name} </h1>
            <h1>Age is : {singer.age}</h1>
        </div>
    )
} 

// win + . 