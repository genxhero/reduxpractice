import React, {useState} from 'react';

const Fidget = (props) => {

    const [color, setColor] = useState("red");
    return (
        <div style={{"background": color}}>
            Click Me
        </div>
    )


}

export default Fidget;