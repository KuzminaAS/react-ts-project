import React from 'react';
import { cn } from '@bem-react/classname';
import './styles.css';
import numberFormat from '../../utils/number-format'

type Options = {
    description: string,
    maidIn: {
        title: string,
        code: string
    },
    category: {
        title: string,
    },
    edition: number,
    price: number,
    _id: string | number,
}

interface Props {
    article: Options
    onAdd(_id: string | number): void
}
function ArticleCard({article, onAdd}: Props) {
 // CSS классы по БЭМ
  const className = cn('ArticleCard');
    return (
         <div className={className()}>
      <div className={className('Description')}>{article.description}</div>
      <div className={className('Prop')}>
        <div className={className('Label')}>Страна производитель:</div>
        <div className={className('Value')}>{article.maidIn?.title} ({article.maidIn?.code})</div>
      </div>

      <div className={className('Prop')}>
        <div className={className('Label')}>Категория:</div>
        <div className={className('Value')}>{article.category?.title}</div>
      </div>

      <div className={className('Prop')}>
        <div className={className('Label')}>Год выпуска:</div>
        <div className={className('Value')}>{article.edition}</div>
      </div>

      <div className={className('Prop', {size: 'big'})}>
        <div className={className('Label')}>Цена:</div>
        <div className={className('Value')}>{numberFormat(article.price)} ₽</div>
      </div>

      <button onClick={() => onAdd(article._id)}>Добавить</button>
    </div>

    )
}
export default React.memo(ArticleCard);