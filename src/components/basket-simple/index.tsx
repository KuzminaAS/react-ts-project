import React from 'react';
import plural from "plural-ru";
import numberFormat from "../../utils/number-format";
import './styles.css';

interface Props {
    amount: number,
    sum: number,
    onOpen:() => void
}
const BasketSimple:React.FC<Props> = props =>{
  return (
    <div className='BasketSimple'>
      <span className="BasketSimple__label">В корзине:</span>
      <span className="BasketSimple__total">
      {props.amount
        ? `${props.amount} ${plural(props.amount, 'товар', 'товара', 'товаров')} / ${numberFormat(props.sum)} ₽`
        : `пусто`
      }
      </span>
      <button className='BasketSimple__button' onClick={props.onOpen}>Перейти</button>
    </div>
  )
}

export default React.memo(BasketSimple);
