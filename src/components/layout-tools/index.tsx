import React from "react";
import {cn} from "@bem-react/classname";
import './styles.css';

interface Props {
    children: {
        key: string
    }
}

function LayoutTools({children}:Props){

  // CSS классы по БЭМ
  const className = cn('LayoutTools');

  return (
    <div className={className()}>
      {React.Children.map(children, (child) => (
        <div key={child.key} className={className('item')}>{child}</div>
      ))}
    </div>
  )
}
export default React.memo(LayoutTools);
