import React from "react"

const Pizza = (props) => {
  const { id, topping, size, vegetarian } = props
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes' : 'No'}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => props.handleSelect(id, topping, size, vegetarian)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
