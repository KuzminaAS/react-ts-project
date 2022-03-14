import React from "react";
import {cn} from "@bem-react/classname";
import './styles.css';

interface Props {
    left: React.ReactNode,
    right: React.ReactNode
}

const LayoutSides: React.FC<Props> = props =>{

  // CSS классы по БЭМ
  const className = cn('LayoutSides');

  return (
    <div className={className()}>
      <div className={className('left')}>{props.left}</div>
      <div className={className('center')}>{props.children}</div>
      <div className={className('right')}>{props.right}</div>
    </div>
  )
}

export default React.memo(LayoutSides);
