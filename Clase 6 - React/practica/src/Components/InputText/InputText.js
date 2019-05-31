import React, { Component } from 'react';

class InputText extends Component {
    constructor(props){
        super(props);
    }


    onChangeValue = (value, name) =>{
        // this.setState({value})

        this.props.onChangeValue && this.props.onChangeValue({ value, name})
    }

    render() {
        const {name, placeholder, value} = this.props;
        console.log("Renderiza inputtext")
        return (
            <div>
                <input type="text" onChange={(e) => this.onChangeValue(e.target.value, name)} placeholder={placeholder} value={value}></input>
            </div>
        );
    }
}

export default InputText;
