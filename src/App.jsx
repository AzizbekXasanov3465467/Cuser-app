import { useState } from 'react'
import './App.css'



import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Userlist from './components/userList/Userlist'
import Newuserfrom from './components/newuser/Newuserfrom'


function App() {
  const [showModal, setModal] = useState(false)
  const [users, setUsers] = useState([])

const hedeDelete = (id) => {
  setUsers((prev) => {
  return prev.filter((userf) => {
      return userf.id !== id
    })
  })
}
const closeModal = (e) => {
if (e.target.classList.value === "overlay") setModal(false)
if(e.key === "Escape") setModal(false)
}
  const  addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setModal(false)
  }
  return(
<div onClick={closeModal} onKeyDown={closeModal} className="App">
<Navbar  userLenght={users.length}/>
<main>
<div className="no-users">
  {users.length > 0 ? users.length : "No User"}
</div>
<Userlist users={users} hedeDeslete={hedeDelete} />
</main>
{showModal && <Newuserfrom addUser={addUser}/>

}
<button className='create-user' onClick={() => setModal(true)}>Click User</button>

<Footer />
</div>
  )
}
export default App

