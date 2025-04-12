import React from 'react'

export default function Alerts(props) {
  return (
//     

props.alert && <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alerts.type}</strong>: {props.alerts.msg}
  {/* {props.alerts} */}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
</div>
    
  )
}
