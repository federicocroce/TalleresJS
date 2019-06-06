import React from "react";


const MyComponentMixExport = (props) => {
    console.log(props);
    return <p>MyComponentMixExport {props.name}</p>
}

const MyComponentMixExport1 = () => {
    return <p>MyComponentMixExport 1</p>
}

const MyComponentMixExport2 = () => {
    return <p>MyComponentMixExport 2</p>
}

export {
    MyComponentMixExport1,
    MyComponentMixExport2
}

export default MyComponentMixExport;