import useServices from "./use-services";
import Store from '../store/index';

/**
 * Хук для доступа к объекту хранилища
 * @return {Store}
 */
export default function useStore(): Store {
  return useServices().getStore() as Store;
}

