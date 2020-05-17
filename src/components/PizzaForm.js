import React from "react"

const PizzaForm = (props) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name='topping' className="form-control" placeholder="Pizza Topping" value={props.allState.topping} onChange={(event) => props.changeForm(event)}/>
        </div>
        <div className="col">
          <select name='size' value={props.allState.size} className="form-control" onChange={(event) => props.changeForm(event)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input name='vegetarian' className="form-check-input" type="radio" value="Vegetarian" checked={props.allState.vegetarian ? true: false} onChange={() => props.changeCheckBox(true)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input name='vegetarian' className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.allState.vegetarian ? true : false} onChange={() => props.changeCheckBox(false)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.changeSubmit()}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm