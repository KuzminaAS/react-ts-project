import React from "react";
import './styles.css';

interface Props {
  head?: JSX.Element,
  style?: React.CSSProperties,
  content?: React.ReactNode
  children: React.ReactElement | React.ReactNode
}
const Layout: React.FC<Props> = props => {
  return (
    <div className='Layout' style={props.style}>
      <div className='Layout__head'>
        {props.head}
      </div>
      <div className='Layout__center'>
        {props.content || props.children}
      </div>
    </div>
  )
}

export default React.memo(Layout);
