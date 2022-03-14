import React from 'react';
import {Link} from "react-router-dom";
import numberFormat from "../../utils/number-format";
import './styles.css';

interface Props {
    item: {
        _key: string,
        title: string,
        price: number,
        amount: number
    },
    link: string,
    onLink:() => void
}

const ItemBasket: React.FC<Props>= props => {
  return (
    <div className='ItemBasket'>
      <div className='ItemBasket__number'>{props.item._key}</div>
      <div className='ItemBasket__title' onClick={props.onLink}><Link to={props.link}>{props.item.title}</Link></div>
      <div className='ItemBasket__right'>
        <span className="ItemBasket__cell">{numberFormat(props.item.price || 0)} ₽</span>
        <span className="ItemBasket__cell">{numberFormat(props.item.amount || 0)} шт</span>
      </div>
    </div>
  )
}

export default React.memo(ItemBasket);
