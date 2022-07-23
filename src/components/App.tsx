import React, { useState } from "react";


const App = () => {
    const [state, setState] = useState(false)
    return ( 
        <div onClick={()=>setState(true)}>
            {state ? "true" : "false"}
        </div>
    )
}


export default App;