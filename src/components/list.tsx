import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from 'hooks/useTypedSelector';
import { auth } from 'hooks/useAuth';
import constants from 'libs/constants';
import instance from 'libs/instance';
import { setStudents, setLoading, setModal } from 'store/actionCreators';
import { Istudent } from 'types';
import Item from 'components/item';
import lang from 'libs/lang';

function List() {
  const students = useTypedSelector((state) => state.students);
  const isAuth = useTypedSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loadStudents = () => {
    instance.get(constants.API_METHODS.STUDENTS)
      .then(({ data }) => {
        dispatch(setStudents(data));
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    if (auth()) {
      loadStudents();
    } else {
      dispatch(setModal(constants.MODAL_STATES.AUTH));
    }
  }, [isAuth]);

  const onAddStudent = () => {
    dispatch(setModal(constants.MODAL_STATES.ADD_STUDENT));
  };

  return (
    <div className="list">
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">{lang.TABLE.HASH}</th>
            <th scope="col">{lang.TABLE.STUDENT}</th>
            <th scope="col">{lang.TABLE.BALANCE}</th>
            <th scope="col">{lang.TABLE.ACTIONS}</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((item: Istudent, index: number) => (
              <Item
                id={item._id}
                count={item.count}
                name={item.name}
                cash={item.cash}
                index={index}
              />
            ))
        }
        </tbody>
      </table>
      <div className="add-button-container">
        <button
          onClick={onAddStudent}
          type="button"
          className="btn btn-lg btn-outline-success add-btn"
        >
          {lang.TABLE.ADD}
        </button>
      </div>
    </div>
  );
}

export default List;
