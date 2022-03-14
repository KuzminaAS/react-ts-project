import Store from './index';
import API from '../api';
import Services from '../services';
/**
 * Базовый класс модуля хранилища
 */
class StoreModule <S = any>{
  protected store: Store;
  protected name: string;
  protected api: API;
  protected services: Services;
  
  /**
   * @param store {Store} Ссылка на хранилище
   * @param name {String} Навзание модуля (ключ данных в state)
   */
    constructor(store: Store, name: string) {
      this.name = name;
      this.services = store.services;
      this.api = store.services.getApi();
      this.store = store;
  }

  /**
   * Начальное состояние
   * @return {Object}
   */
  initState(): S {
    return {} as S;
  }

  /**
   * Текущее своё состояние
   * @return {*}
   */
  getState(): S {
    return this.store.getState()[this.name];
  }

  /**
   * Установка своего состояния
   * @param state {*}
   */
  setState(state: S): void {
    this.store.setState({
      ...this.store.getState(),
      [this.name]: state,
    });
  }

  /**
   * Обновление состояния
   * @param patch
   */
  updateState(patch: S): void {
    this.setState({
      ...this.getState(),
      ...patch
    })
  }
}

export default StoreModule;
