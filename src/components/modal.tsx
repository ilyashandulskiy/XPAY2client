import { useDispatch } from 'react-redux';
import useTypedSelector from 'hooks/useTypedSelector';
import constants from 'libs/constants';
import { setModal } from 'store/actionCreators';
import AddStudent from 'components/forms/addStudent';
import Alert from 'components/forms/alert';
import Auth from 'components/forms/auth';
import ChangeCash from 'components/forms/changeCash';
import RenameStudent from 'components/forms/renameStudent';
import History from 'components/history';
import lang from 'libs/lang';
// eslint-disable-next-line import/extensions
import Hide from './forms/hide';

function Modal() {
  const dispatch = useDispatch();
  const visible = useTypedSelector((state) => state.modal);

  let title;
  let component;
  let closeble = true;

  const onClose = () => {
    dispatch(setModal(false));
  };

  switch (visible) {
    case constants.MODAL_STATES.ADD_CASH:
      title = lang.MODAL.ADD;
      component = <ChangeCash act="add" />;
      break;
    case constants.MODAL_STATES.SUBTRACT_CASH:
      title = lang.MODAL.SUBTRACT;
      component = <ChangeCash act="subtract" />;
      break;
    case constants.MODAL_STATES.HISTORY:
      title = lang.MODAL.HISTORY;
      component = <History />;
      break;
    case constants.MODAL_STATES.ADD_STUDENT:
      title = lang.MODAL.ADD_STUDENT;
      component = <AddStudent />;
      break;
    case constants.MODAL_STATES.RENAME_STUDENT:
      title = lang.MODAL.RENAME_STUDENT;
      component = <RenameStudent />;
      break;
    case constants.MODAL_STATES.COPIED:
      title = lang.MODAL.COPIED;
      component = <Alert />;
      break;
    case constants.MODAL_STATES.HIDE:
      title = lang.MODAL.HIDE;
      component = <Hide />;
      break;
    case constants.MODAL_STATES.AUTH:
      title = lang.MODAL.LOGIN;
      closeble = false;
      component = <Auth />;
      break;
    default:
      return null;
  }

  return (
    <>
      <div
        style={{ pointerEvents: visible ? 'all' : 'none' }}
        className={`modal-backdrop fade ${visible && 'show'}`}
      />
      <div
        style={{ pointerEvents: visible ? 'all' : 'none', display: 'block' }}
        className={`modal fade ${visible && 'show'}`}
        id="exampleModalDefault"
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
              {
                closeble
                  ? (
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  )
                  : null
                }
            </div>
            <div className="modal-body">
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
