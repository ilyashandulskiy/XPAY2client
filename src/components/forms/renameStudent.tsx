import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from 'hooks/useTypedSelector';
import instance from 'libs/instance';
import { setLoading, setModal, setStudents } from 'store/actionCreators';
import Input from 'components/ui/input';
import lang from 'libs/lang';
import constants from 'libs/constants';

function RenameStudent() {
  const dispatch = useDispatch();
  const loading = useTypedSelector((state) => state.loading);
  const selected = useTypedSelector((state) => state.selectedStudent);
  const [name, setName] = useState<string>('');

  const onAddStudent = () => {
    dispatch(setLoading(lang.TOAST.CHANGING_INFO));

    instance.post(`${constants.API_METHODS.STUDENT}/${selected}`, {
      name,
    })
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
    <>
      <Input
        value={name}
        label={lang.FORMS.STUDENT_NAME}
        onChange={setName}
      />

      <button
        onClick={onAddStudent}
        type="button"
        disabled={Boolean(loading)}
        className="btn btn-lg btn-success"
      >
        {lang.FORMS.RENAME}
      </button>
    </>
  );
}

export default RenameStudent;
