import React from 'react';
import './styles.css';
import numberFormat from "../../utils/number-format";
import { Link } from "react-router-dom";

interface Props {
    item: {
        _key: string,
        title: string,
        price: number,
        _id: string
    },
    link: string,
    onAdd:(value:string) => void
}

const Item: React.FC<Props> = props => {
  return (
    <div className='Item'>
      <div className='Item__number'>{props.item._key}</div>
      <div className='Item__title'><Link to={props.link}>{props.item.title}</Link></div>
      <div className='Item__right'>
        <div className='Item__price'>{numberFormat(props.item.price)} ₽</div>
        <button onClick={() => props.onAdd(props.item._id)}>Добавить</button>
      </div>
    </div>
  )
}
export default React.memo(Item);
