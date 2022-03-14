import Services from '../services';
import * as modules from "../store/export";
/**
 * Хранилище состояния приложения
 */

export type TModules = typeof modules;

type TStoreModules = {
  [key in keyof TModules]: InstanceType<TModules[key]>;
};

export type IRootState = {
  [key in keyof TStoreModules]: ReturnType<TStoreModules[key]['initState']>;
};

class Store {
     /**
   * @param modules {Object} Классы StoreModule для создания экземпляров модулей хранилища
   */
    private modules: TStoreModules
    public services: Services;
    private state: IRootState
    private listners: Array<any>
  
  constructor(services: Services, modules: TModules) {
        this.services = services;
        // Состояние приложения (данные всех модулей)
        this.state = {} as IRootState;

        // Подписчики на изменение state
        this.listners = [];

           // Модули
        this.modules = {} as TStoreModules
        const names = Object.keys(modules);

        for (const name of names) {
            // Экземпляр модуля
            this.modules[name] = new modules[name](this, name);
            // Состояние по умочланию от модуля
            this.state[name] = this.modules[name].initState();
            }
  }
    
        /**
     * Подписка на изменение state
     * @param callback {Function}
     */
    subscribe(callback: Function) {
        this.listners.push(callback);
        // Возвращаем функцию для отписки
        return () => {
        this.listners = this.listners.filter(item => item !== callback);
        }
    }
    /**
   * Выбор state
   * @return {Object}
   */
  getState(): IRootState {
    return this.state;
  }

  /**
   * Установка state
   * @param newState {Object}
   */
  setState(newState: IRootState) {
    this.state = newState;
    // Оповещаем всех подписчиков об изменении стейта
    for (const lister of this.listners) {
      lister(this.state);
    }
  }

  /**
   * Доступ к модулю состояния
   * @param name {String} Название модуля
   * @return {StoreModule}
   */
  get<T extends keyof TStoreModules>(name: T): TStoreModules[T] {
    return this.modules[name];
  }
  /**
   * @return {BasketStore}
   */
  get basket() {
    return this.get("basket");
  }

  /**
   * @return {ModalsStore}
   */
  get modals() {
    return this.get('modals');
  }

  /**
   * @return {CatalogStore}
   */
  get catalog(){
    return this.get('catalog');
  }

   /**
   * @return {CatalogStore}
   */
  get article() {
    return this.get('article');
  }
}

export default Store;