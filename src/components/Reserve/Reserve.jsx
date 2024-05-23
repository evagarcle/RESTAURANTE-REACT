import { useState } from "react"


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

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("reservationInfo", JSON.stringify(formInfo))
    setFormInfo({
      name: '',
      date: '',
      people: '',
      time: ''
    })
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
      </form>

    </div>
  )
}

export default Reserve