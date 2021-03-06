import { useState } from 'react';
import useAuth from 'hooks/useAuth';
import Input from 'components/ui/input';
import lang from 'libs/lang';

function Auth() {
  const [name, setName] = useState<string>('');
  const login = useAuth();

  const onAuthorizate = () => {
    login(name);
  };

  return (
    <>
      <Input
        label={lang.FORMS.LOGIN}
        value={name}
        onChange={setName}
      />

      <button
        onClick={onAuthorizate}
        type="button"
        className="btn btn-lg btn-success"
      >
        Войти
      </button>
    </>
  );
}

export default Auth;
