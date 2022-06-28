// ---Dependencies
import { useRouter } from 'next/router';
// ---Redux
import { useDispatch } from 'react-redux';
import { appInfoActions } from '@Redux/appInfo/actions';
// ---Custom hooks
import { useIsomorphicLayoutEffect } from 'Utils/customHooks/useIsomorphicLayoutEffect';

/** Hook para escuchar y capturar la ruta actual y los parámetros en la url de la aplicación */
export function useRouteListen(): void {
  const dispatch = useDispatch();
  const router = useRouter();
  const path = router?.route;
  const params = router?.query;

  useIsomorphicLayoutEffect(() => {
    dispatch(appInfoActions.updatePath(path));
  }, [path]);
  useIsomorphicLayoutEffect(() => {
    dispatch(appInfoActions.updateParam(params as unknown as string));
  }, [params]);
}
