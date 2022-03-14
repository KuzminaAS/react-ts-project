import React, {useCallback} from 'react';
import {cn} from '@bem-react/classname'
import './styles.css';

type Options =  { value: any, title: string }

interface Props {
  options: Options[],
  value: any,
  onChange:(value: any)=> void
}
const Select: React.FC<Props> = props => {

  // CSS классы по БЭМ
  const className = cn('Select');

  const onSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    props.onChange(e.target.value);
  }, [props.onChange])

  return (
    <select className={className()} onChange={onSelect} value={props.value}>
      {props.options.map(({value, title}) => (
        <option key={value} value={value}>{title}</option>
      ))}
    </select>
  )
}

export default React.memo(Select);
