import './Newuserfrom.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Newuserfrom({addUser}) {
  const [users, setUser] = useState({
    
  id: uuidv4(),
  image: '',
  firstName: '',
  lastName: '',
  age: null,
  from: '',
  job: ' ',
  gender: ''

  })

const hedleSubmit = (e) => {
  e.preventDefault()
 addUser(users)
}
  
  return (
 <div className="modall-wrapper">
  <div className="overlay">
    <div className="modal">
      <h2>Create New User</h2>
      <form onSubmit={hedleSubmit}>
        <label>
          <span>Img Url</span>
          <input onChange={(e) => {setUser((prev) => {
            return {...prev, image: e.target.value}
          })}} type="url" required />
        </label>
        <label>
          <span>First Name</span>
          <input onChange={(e) => {setUser((prev) => {
            return {...prev, firstName: e.target.value}
          })}}  type="text" required />
        </label>
        <label>
          <span>Last Name</span>
          <input onChange={(e) => {setUser((prev) => {
            return {...prev, lastName: e.target.value}
          })}} type="text" required />
        </label>
        <label>
          <span>Age: </span>
          <input onChange={(e) => {setUser((prev) => {
            return {...prev, age: e.target.value}
          })}} type="number" required />
        </label>
        <label>
          <span>Job</span>
         <input onChange={(e) => {setUser((prev) => {
            return {...prev, job: e.target.value}
          })}} type="text" required />
        </label>
        <div className="gender">
          <span>Gender: </span>
          <label>
            <small>Male</small>
            <input onChange={(e) => {setUser((prev) => {
            return {...prev, gender: e.target.value}
          })}} type="radio"  required name='gender' value='male'/>
          </label>
          <label>
            <small>Famale</small>
            <input onChange={(e) => {setUser((prev) => {
            return {...prev, gender: e.target.value}
          })}} type="radio"  required name='gender' value='Famale'/>
          </label>
        </div>
        <button className='modal-btn'>Submit</button>
      </form>
    </div>
  </div>
 </div>
  )
}

export default Newuserfrom