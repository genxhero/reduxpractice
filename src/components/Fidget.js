import React, {useState} from 'react';

const Fidget = (props) => {

    const changeColor = ()=> {
        setColor("green")
    }
    const [color, setColor] = useState("red");
    return (
        <div style={{"background": color}} onClick={changeColor}>
            Click Me
        </div>
    )


}

export default Fidget;