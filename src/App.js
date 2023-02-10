import  React, {useContext} from 'react'
import Layout from './components/Layout';
import { Context } from './store';
function App() {
  const { toggleDarkMode } = useContext(Context)
 // const contextico = useContext(Context)

  return (
      <Layout>
        <button onClick={toggleDarkMode}>DarkMode Toggle</button>
      </Layout>
  );
}

export default App;
