
import './App.css'
import NameAge from './components/NameAge/NameAge'
import EmailProfile from './components/Emailbday/Emailbday'
import NumberCourse from './components/NumberCourse/NumberCourse'

function App() {


  return (
    <div className="card">

      <NameAge name = {"denisha"} Age = {30}/>
      <EmailProfile email = {"denishaakbari@gmail.com"} bday = {"21/08/2006"} />
      <NumberCourse number = {"7202000414"} course = {"Master in Front End"} />
    </div>
    

  )
}

export default App
