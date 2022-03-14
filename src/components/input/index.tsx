import React, {useCallback, useEffect, useState} from 'react';
import propTypes from "prop-types";
import {cn} from '@bem-react/classname'
import './styles.css';
import throttle from "lodash.throttle";

interface Props {
  value: string,
  type: string,
  placeholder: string,
  onChange:() => void
  theme: string,
}
const Input: React.FC<Props> = props => {

  // Внутренний стейт по умолчанию с переданным value
  const [value, change] = useState(props.value);

  // const inputEl = useRef(null);

  // Задержка для вызова props.onChange
  const changeThrottle = useCallback(throttle(value => onChange(value), 1000), [props.onChange]);

  // Обработчик изменений в поле
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    change(event.target.value);
    changeThrottle(event.target.value);
  }, [change, changeThrottle]);

  // Обновление стейта, если передан новый value
  useEffect(() => {
    change(props.value);
  }, [props.value]);

  // CSS классы по БЭМ
  const className = cn('Input');

  return (
    <input
      className={className({theme: props.theme})}
      value={value}
      type={props.type}
      placeholder={props.placeholder}
      onChange={onChange}
    />
  )
}

export default React.memo(Input);
