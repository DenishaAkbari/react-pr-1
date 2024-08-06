import  '../../App.css'
 
const EmailProfile = (props) => {

    return (

        <div>  

            <h1> Email : {props.email}</h1>
            <h1> Date Of Birth : {props.bday}</h1>
       </div>
    )
}

export default EmailProfile