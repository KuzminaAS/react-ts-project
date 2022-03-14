import StoreModule from "../module";

type IModalsStore = {
    name: true | false | string
}
class ModalsStore extends StoreModule<IModalsStore>{

  /**
   * Начальное состояние
   */
  initState(): IModalsStore {
    return {
      name: false
    };
  }

  /**
   * Открытие модального окна по названию
   * @param name {String} Название модалки
   */
  open(name: string) {
    this.setState({
      name
    });
  }

  /**
   * Закрытие модального окна
   */
  close(){
    this.setState({
      name: false
    });
  }
}

export default ModalsStore;
