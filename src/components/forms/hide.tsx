import lang from 'libs/lang';
import { useDispatch } from 'react-redux';
import { setLoading, setModal, setStudents } from 'store/actionCreators';
import instance from 'libs/instance';
import constants from 'libs/constants';
import useTypedSelector from 'hooks/useTypedSelector';

function Hide() {
  const dispatch = useDispatch();
  const selected = useTypedSelector((state) => state.selectedStudent);

  const onHide = () => {
    dispatch(setLoading(lang.TOAST.CHANGING_INFO));
    instance.post(`${constants.API_METHODS.HIDE_STUDENT}/${selected}`, {})
      .then(({ data }) => {
        dispatch(setStudents(data));
        dispatch(setLoading(false));
        dispatch(setModal(false));
      })
      .catch(() => {
        dispatch(setLoading(false));
      });
  };

  return (
    <button
      onClick={onHide}
      type="button"
      className="btn btn-lg btn-danger"
    >
      {lang.FORMS.HIDE}
    </button>
  );
}

export default Hide;
