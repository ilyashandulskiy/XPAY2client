import constants from 'libs/constants';
import { useDispatch } from 'react-redux';
import { setAuth, setModal } from 'store/actionCreators';

const loginName = 'sergey';
const authToken = 'KSV';

export const auth = () => localStorage.getItem(constants.LOCAL_STOTAGE_ID) === authToken;

const Login = () => {
  const dispatch = useDispatch();
  return function (passcode: string) {
    if (passcode === loginName) {
      localStorage.setItem(constants.LOCAL_STOTAGE_ID, authToken);
      dispatch(setAuth());
      dispatch(setModal(false));
      return true;
    }
    return false;
  };
};

export default Login;
