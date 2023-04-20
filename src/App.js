import  React, {useContext} from 'react'
import Layout from './components/Layout';
import { Context } from './store';
import Foto from './components/Foto'
function App() {
  const { toggleDarkMode } = useContext(Context)
 // const contextico = useContext(Context)

  return (
      <Layout>
        <button onClick={toggleDarkMode}>DarkMode Toggle</button>
        <Foto />
      </Layout>
  );
}

export default App;
