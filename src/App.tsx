import React, {useState} from 'react';
import Header from './components/Header'
import Menu from './components/Menu'

function App() {
    const [counter, setCounter] = useState(1)

    React.useEffect(() => {
        console.log(counter)
    }, [counter]);

    const handleButtonClick = () => {
        setCounter(counter + 1)
        setTimeout(() => {
            console.log(counter)
        }, 2000);
    }
    const handleButtonClick2 = () => {
        console.log(counter)
    }
    return (
        <>
            <Header title="Página inicial"/>  
            <h1>Hello Dev!</h1>
            <p>{ counter }</p>
            <button onClick={handleButtonClick}>Incrementar</button>
            <button onClick={handleButtonClick2}>imprimir</button>
            <Menu>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>    
            </Menu> 
        </>
    );
}

export default App;