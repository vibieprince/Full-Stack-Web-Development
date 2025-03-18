import UserCard from "./components/UserCard"
import Prince from "./assets/Prince.jpg"
import Maharana from "./assets/maharana.jpg"
import Prithviraj from "./assets/prithviraj.jpg"

function App() {

  return (
    <div className="container">
      <UserCard name="Love Rana" desc="Description of Prince" image={Prince} style={{"border-radius":"10px"}}/>
      <UserCard name="Maharana Pratap" desc="Description of Maharana Pratap" image={Maharana} style={{"border-radius":"10px"}}/>
      <UserCard name="Prithvi Raj Chauhan" desc="Description of Prithiviraj chauhan" image={Prithviraj} style={{"border-radius":"10px"}} />
    </div>
  )
}

export default App
