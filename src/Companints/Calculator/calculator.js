import "./calculator.css"

import {useState} from "react"

function Calculator () {

  const [x, setX] = useState(0)
  const inputX = evt => setX(evt.target.value)

  const [y ,setY] = useState(0)
  const inputY = evt => setY(evt.target.value)

  const [z, setZ] = useState("+")
  const calculatorOperations = () => setZ(document.getElementById('ab').value)

  
  return (
    <>
      <input onChange = {inputX} className="input-calculator" type="number" />

      <input onChange = {inputY} className="input-calculator" type="number" />

      <select onChange={calculatorOperations} id="ab" className="input-calculator">
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
        <option>%</option>
      </select>

      <h2>{x} {z} {y} = {Number(x) + Number(y)}</h2>

    </>
  )
}


export default Calculator