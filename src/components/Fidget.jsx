import React, {useState} from 'react';

const COLORS = ["red", "blue", "green", "cyan", "magenta", "yellow", "purple"];

const Fidget = () => {

    const changeColor = ()=> {
        if (color < COLORS.length - 1) {
            setColor(color + 1)
        } else {
            setColor(0)
        }
    }

    const [color, setColor] = useState(0);
    return (
      <div
        className="clicky"
        style={{ background: COLORS[color] }}
        onClick={changeColor}
      >
        <span>Click Me</span>
      </div>
    );


}

export default Fidget;