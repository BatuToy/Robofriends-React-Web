import React, { useState ,useEffect } from "react";

function ErrorBoundry (_props){
    const [ hasError , setHasError ] = useState(false);


    useEffect( (error , info) => {
        setHasError(true);
    });

    if ({hasError}) {
        return <h1> OOOOOPS! There is something wrong !</h1>
    }
    return this._props.children
}


export default ErrorBoundry;