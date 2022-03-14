import React from 'react';
import './styles.css';

type Active = {
  active: true | false
}
interface ISpinner {
  active: Active,
  children: React.ReactElement
}
const Spinner: React.FC<ISpinner> = props => {

  if (props.active){
    return (
      <div className="Spinner">
        {props.children}
      </div>
    )
  } else {
    return props.children;
  }
}

export default Spinner;
