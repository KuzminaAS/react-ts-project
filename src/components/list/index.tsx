import React from 'react';
import './styles.css';

type Options = {
    _id: string
}

interface IList {
    items: Options[],
    renderItem: (item: any) => JSX.Element
}



function List({ items, renderItem }: IList) {
    
  return (
    <div className='List'>
      {items.map(item =>
        <div key={item._id} className='List__item'>
          {renderItem(item)}
        </div>
      )}
    </div>
  );
}

export default React.memo(List);
