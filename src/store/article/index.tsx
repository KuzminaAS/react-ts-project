import StoreModule from "../module";

type IArticleStore  = {
    data: object,
    waiting: true | false
}
class ArticleStore extends StoreModule<IArticleStore> {

  /**
   * Начальное состояние
   */
  initState(): IArticleStore {
    return {
      data: {},
      waiting: true
    };
  }

  /**
   * Загрузка списка товаров
   */
  async load(id: string | any) {

    this.updateState({
      waiting: true,
      data: {}
    });

    try {
      const json = await this.api.GET(`/api/v1/articles/${id}?fields=*,maidIn(title,code),category(title)`);
      if (json.error) throw new Error(json.error);

      this.updateState({
        data: json.result,
        waiting: false
      });

    } catch (e){
      this.updateState({
        data: {},
        waiting: false
      });
    }
  }
}

export default ArticleStore;
