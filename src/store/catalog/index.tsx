import StoreModule from "../module";
import { parse, stringify } from 'qs';
import {TStringifyOptions, TParseOptions, TCatalogStore} from '../../types/index';

const QS_OPTIONS: TStringifyOptions & TParseOptions = {
  stringify: {
    addQueryPrefix: true,
    arrayFormat: 'comma',
    encode: false
  },
  parse: {
    ignoreQueryPrefix: true,
    comma: true
  }
}

interface ICatalogStore {
  items: any[],
  count: number,
  params: TCatalogStore,
  waiting: boolean
}

class CatalogStore extends StoreModule<ICatalogStore> {

  /**
   * Начальное состояние
   */
  initState(): ICatalogStore {
    return {
      items: [],
      count: 0,
      params: {
        page: 1,
        limit: 10,
        sort: 'key',
        query: ''
      },
      waiting: true
    };
  }

  /**
   * Инициализация параметров.
   * Восстановление из query string адреса
   * @param params
   * @return {Promise<void>}
   */
  async initParams(params?: {}): Promise<void>{
    // Параметры из URl. Их нужно валидирвать, приводить типы и брать толкьо нужные
    const urlParams = parse(window.location.search, QS_OPTIONS.parse) || {}
    let validParams = {} as ICatalogStore["params"];
    if (urlParams.page) validParams.page = Number(urlParams.page) || 1;
    if (urlParams.limit) validParams.limit = Number(urlParams.limit) || 10;
    if (urlParams.sort) validParams.sort = urlParams.sort;
    if (urlParams.query) validParams.query = urlParams.query;

    // Итоговые параметры из начальных, из URL и из переданных явно
    const newParams = {...this.initState().params, ...validParams, ...params};
    // Установка параметров и подгрузка данных
    await this.setParams(newParams, true);
  }

  /**
   * Сброс параметров к начальным
   * @param params
   * @return {Promise<void>}
   */
  async resetParams(params?:{}): Promise<void> {
    // Итоговые параметры из начальных, из URL и из переданных явно
    const newParams = {...this.initState().params, ...params};
    // Установк параметров и подгрузка данных
    await this.setParams(newParams);
  }

  /**
   * Загрузка списка товаров
   */
  async setParams(params = {}, historyReplace = false){
    const newParams = {...this.getState().params, ...params};

    this.setState({
      ...this.getState(),
      params: newParams,
      waiting: true
    });

    const skip = (newParams.page - 1) * newParams.limit;
    const json = await this.api.GET(`/api/v1/articles?limit=${newParams.limit}&skip=${skip}&fields=items(*),count&sort=${newParams.sort}&search[query]=${newParams.query}`);

    this.setState({
      ...this.getState(),
      items: json.result.items,
      count: json.result.count,
      waiting: false
    });

    // Запоминаем параметры в URL
    let queryString = stringify(newParams, QS_OPTIONS.stringify);
    const url = window.location.pathname + queryString + window.location.hash;
    if (historyReplace) {
      window.history.replaceState({}, '', url);
    } else {
      window.history.pushState({}, '', url);
    }
  }
}

export default CatalogStore;
