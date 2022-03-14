import React from "react";
import './styles.css';

interface IControls {
    onCreate(): void
}

function Controls({onCreate}:IControls){
  return <div className='Controls'>
    <button onClick={onCreate}> Добавить</button>
  </div>
}
export default React.memo(Controls);
