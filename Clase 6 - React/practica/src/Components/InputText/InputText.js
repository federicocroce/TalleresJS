import React, { Component } from 'react';


// const onChangeValue = (props, value, name) =>{
//     onChangeValue && onChangeValue({ value, name})
// }


// const InputText = ({name, placeholder, value, onChangeValue}) => <input type="text" onChange={(e) => onChangeValue(e.target.value, name, onChangeValue)} placeholder={placeholder} value={value}></input>


class InputText extends Component {
    constructor(props){
        super(props);

        this.state ={
            value: "" || this.props.value,
        }
    }


    onChangeValue = (value, name) =>{
        this.setState({value});
        this.props.onChangeValue && this.props.onChangeValue({ value, name})
    }

    render() {
        const {name, placeholder} = this.props;
        console.log("Renderiza inputtext")
        return (
            <div>
                {/* <input type="text" onChange={(e) => this.setState({inputValue: e.target.value})} placeholder={placeholder} value={this.state.value}></input> */}
                <input type="text" onChange={(e) => this.onChangeValue(e.target.value, name)} placeholder={placeholder} value={this.state.value}></input>
            </div>
        );
    }
}

export default InputText;
