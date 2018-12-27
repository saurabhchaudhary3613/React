import React from 'react';


const userInput = (props) => {
    console.log(props);
    return (
        <div>
          User Input !
          <input type="text" onChange={props.changeUserName} value={props.abc}/>
        </div>
    )
}

export default userInput;