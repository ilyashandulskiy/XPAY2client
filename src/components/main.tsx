import Layout from "./layout"
import List from "./list"
import Modal from "./modal"
import Toast from "./toast"

const Main = () => (
    <div className="App">
      <Layout>
        <Toast />
        <Modal />
        <List />
      </Layout>
    </div>
)

export default Main