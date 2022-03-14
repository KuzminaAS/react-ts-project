import StoreModule from "../module";

type TBasketStore =  {_id: string, amount: number,price: number }
interface IBasketStore {
    items: TBasketStore[],
    sum: number,
    amount: number,
}
class BasketStore extends StoreModule<IBasketStore> {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      sum: 0,
      amount: 0,
    };
  }

  /**
   * Добавление товара в корзину по коду
   * @param id {*}
   */
  async add(id: string){
    // Ищем товар в корзие, чтобы увеличить его количество.
    let exists = false;

    const items = this.getState().items.map(item => {
      // Искомый товар
      if (item._id === id) {
        exists = true;
        return {...item, amount: item.amount + 1};
      }
      return item
    });

    if (!exists) {
      try {
        // Если товар не был найден в корзине, то добавляем новый
        const json = await this.api.GET(`/api/v1/articles/${id}`);
        // Поиск товара в каталоге, чтобы его в корзину добавить
        const item = json.result;
        items.push({...item, amount: 1});
      } catch (e){
        console.error('товар не найден')
      }
    }

    // Считаем суммы
    let amount = 0;
    let sum = 0;
    for (const item of items){
      amount += item.amount;
      sum += item.price * item.amount;
    }

    // Установка состояние basket
    this.setState({
      items,
      amount,
      sum
    });
  }

}

export default BasketStore;
