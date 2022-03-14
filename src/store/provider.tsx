import React from 'react';
import Services from '../services';

/**
 * Контекст для Store
 * @type {React.Context<{}>}
 */
export const ServicesContext: React.Context<{}> = React.createContext({});

/**
 * Провайдер store.
 * Подключает контекст к приложение для доступа к хранилищу store.
 * Провайдер не обрабатывает изменения в store.
 * Тот кто использует состояние из store долежн сам подписаться на их изменения.
 * напрямую store используется, чтобы вызвать его методы изменения состояния.
 */
 interface Props {
   services: Services,
   children: React.ReactElement
}
const ServicesProvider: React.FC<Props> = props =>  {
  // В провайдер передатся объект хранилища store,
  // после чего store можно получиь через useContext(StoreContext) в любом компоненте
  return (
    <ServicesContext.Provider value={props.services}>
      {props.children}
    </ServicesContext.Provider>
  );
}

export default React.memo(ServicesProvider);
