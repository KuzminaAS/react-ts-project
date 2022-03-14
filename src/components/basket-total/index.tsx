import React from 'react';
import numberFormat from "../../utils/number-format";
import './styles.css';

interface Props {
    amount: number,
    sum: number
}

const BasketTotal: React.FC<Props> = props => {
  return (
    <div className="BasketTotal">
      <span className="BasketTotal__cell">Итого</span>
      <span className="BasketTotal__cell">{numberFormat(props.sum)} ₽</span>
      <span className="BasketTotal__cell">{numberFormat(props.amount)} шт</span>
    </div>
  )
}

export default React.memo(BasketTotal);
