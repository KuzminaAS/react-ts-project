import React, {useCallback} from 'react';
import {cn} from '@bem-react/classname'
import './styles.css';

interface IPagination {
  page: number,
  limit: number,
  count: number,
  onChange:(page:number) => void
}
function Pagination({page = 1, limit = 10, count = 1000, onChange}: IPagination) {

  // Количество станиц
  const length = Math.ceil(count / Math.max(1, limit));
  // Начальная и конечная страница последовательности, чтобы все не рендерить
  const start = Math.max(page - 2, 1);
  const end = Math.min(start + 4, length);

  let items = new Array

  // Первая страница всегда нужна
  if (start > 1){
    items.push(1);
    if (start > 2) items.push(null); // пропуск
  }

  // Генерируем последваотельность станиц
  for (let page = start; page <= end; page++) items.push(page)

  // Последнаяя страница
  if (end < length){
    if (end < length - 1) items.push(null); // пропуск
    items.push(length);
  }

  const onClickHandler = useCallback((page: number) => {
    // Возвращаем функцию с замыканием на номер страницы
    return (e) => onChange(page);
  }, [onChange]);

  // CSS классы по БЭМ
  const className = cn('Pagination');

  return (
    <ul className={className()}>
      {items.map((number, index) => (
        <li key={index}
            className={className('item', {active: number === page, split: !number})}
            onClick={onClickHandler(number)}
        >
          {number || '...'}
        </li>
      ))}
    </ul>
  )
}

export default React.memo(Pagination);
