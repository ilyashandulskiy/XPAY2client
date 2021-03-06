import Layout from 'components/layout';
import List from 'components/list';
import Modal from 'components/modal';
import Toast from 'components/toast';

function Main() {
  return (
    <div className="App">
      <Layout>
        <Toast />
        <Modal />
        <List />
      </Layout>
    </div>
  );
}

export default Main;
