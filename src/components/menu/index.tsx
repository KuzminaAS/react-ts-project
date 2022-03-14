import React from 'react';
import {cn} from '@bem-react/classname'
import './styles.css';
import { Link } from "react-router-dom";

type TMenu = { key: number, link: string, title: string }

interface IMenu {
    items: TMenu[]
}

function Menu({items}: IMenu) {

  // CSS классы по БЭМ
  const className = cn('Menu');

  return (
    <ul className={className()}>
      {items.map(item => (
        <li key={item.key} className={className('item')}>
          <Link to={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default React.memo(Menu);
