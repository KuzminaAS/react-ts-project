import React from 'react';
import './styles.css';

interface Props {
    title: string,
    onClose: () => void,
    children: React.ReactNode
}

function LayoutModal({title = 'Mодалка', onClose, children}: Props) {
  return (
    <div className="LayoutModal">
      <div className="LayoutModal__frame">
        <div className="LayoutModal__head">
          <h1 className="LayoutModal__title">
            {title}
          </h1>
          <button className="LayoutModal__close" onClick={onClose}>Закрыть</button>
        </div>
        <div className="LayoutModal__content">
          {children}
        </div>
      </div>
    </div>
  );
}
export default React.memo(LayoutModal);
