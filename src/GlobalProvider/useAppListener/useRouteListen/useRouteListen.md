// ---Dependencies
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// ---Redux
import { appInfoActions } from '@Redux/appInfo/actions';
import { useDispatch, useSelector } from 'react-redux';
import { FullReduxState } from '@Redux/globalReducers';

/** Hook to listen and catch the app current route and params */
export function useRouteListen() {
  const dispatch = useDispatch();
  const { currentParams } = useSelector((s: FullReduxState) => s.appInfoReducer);
  const { pathname, search: urlParams } = useLocation();
  useEffect(() => {
    dispatch(appInfoActions.updatePath(pathname));
  }, [pathname]);
  useEffect(() => {
    const justParams = urlParams.split('?')[1];
    if (currentParams !== justParams) {
      dispatch(appInfoActions.updateParam(justParams));
    }
  }, [urlParams]);
}
