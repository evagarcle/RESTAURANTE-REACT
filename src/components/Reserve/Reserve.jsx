
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Reserve = () => {

  const [formInfo, setFormInfo] = useState({
    name: '',
    date: '',
    people: '',
    time: ''
  })




  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInfo({
      ...formInfo,
      [name]: value
    })
  }


  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const savedReservations = JSON.parse(localStorage.getItem("reservationInfo")) || []
    const updatedReservations = [...savedReservations, formInfo]
    localStorage.setItem("reservationInfo", JSON.stringify(updatedReservations))
    
  
    alert("Reserva guardada")
    setFormInfo({
      name: '',
      date: '',
      people: '',
      time: ''
    })

    setTimeout(() => {
      navigate("/")
    }, 2000)
  }



  return (
    <div>
      
      <h2>Realiza tu reserva</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" id="name" value={formInfo.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Fecha:</label>
          <input type="date" name="date" id="date" value={formInfo.date} onChange={handleChange} required/>
        </div>
        <div>
          <label>Número de personas:</label>
          <input type="text" name="people" id="people" value={formInfo.people} onChange={handleChange} required/>
        </div>
        <div>
          <label>Hora:</label>
          <input type="time" name="time" id="time" value={formInfo.time} onChange={handleChange} required/>
        </div>
        <button type="submit" >Enviar y reservar</button>
      </form>

    </div>
  )
}

export default Reserve