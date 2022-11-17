import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import displayCash from 'libs/displayCash';
import instance from 'libs/instance';
import { Ihistory } from 'types';
import History from 'components/history';
import constants from 'libs/constants';

interface Istudent {
    name: string,
    cash: number,
    history: Ihistory[]
}

function Student() {
  const { id } = useParams();
  const [student, setStudent] = useState<Istudent>({} as Istudent);
  const cashColor = (student?.cash === 0 ? 'black' : (student?.cash > 0 ? '#198754' : '#dc3545'));

  useEffect(() => {
    instance.get(`${constants.API_METHODS.STUDENT}/${id}`)
      .then(({ data }) => setStudent(data));
  });

  if (!student.name) return null;

  return (
    <div className="student">
      <p className="display-1" style={{ color: cashColor }}>{ displayCash(student.cash) }</p>
      <p className="h1">{student.name}</p>

      <History
        studentId={id}
        reversed
      />
    </div>
  );
}

export default Student;
