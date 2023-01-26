import React from 'react'
import "./ButtonOption.css"

function ButtonOption(props) {
  return (
    <div>
        <button className='btnCon' disabled={props.status}>
            <div>{props.icon}</div>
            {/* <div>{props.text}</div> */}
        </button>
    </div>
  )
}

export default ButtonOption