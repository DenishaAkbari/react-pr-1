import  '../../App.css';
import img from '../../assets/myprofile.jpeg'

const NameAge = (props) =>{

    return (
        <>

        <img src= {img} alt="" />

        <div className = {props.cls}>   
            <h1>Name : {props.name}</h1>
            <h1>Age : {props.Age}</h1>
        </div>
        </>
    )
}

export default NameAge