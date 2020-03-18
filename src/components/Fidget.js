import React, {useState} from 'react';

const COLORS = ["red", "blue", "green", "cyan", "magenta", "yellow", "purple"]

const Fidget = (props) => {

    const changeColor = ()=> {
        if (color < COLORS.length) {
            setColor(color + 1)
        } else {
            setColor(0)
        }
    }
    const [color, setColor] = useState(0);
    return (
        <div style={{"background": COLORS[color]}} onClick={changeColor}>
            Click Me
        </div>
    )


}

export default Fidget;