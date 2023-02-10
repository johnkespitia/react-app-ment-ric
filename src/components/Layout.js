import  React, {useContext} from 'react'
import { Context } from './../store';

const Layout = (props) => {

    const { darkMode } = useContext(Context)

    return <div style={{
        backgroundColor: (darkMode)?process.env.REACT_APP_DARK:process.env.REACT_APP_LIGHT,
        color: (!darkMode)?process.env.REACT_APP_DARK:process.env.REACT_APP_LIGHT,
        width: "100vw",
        height: "100vh"
    }}>
        <h1>Hello World with Context!</h1>
        {props.children}
    </div>
}

export default Layout