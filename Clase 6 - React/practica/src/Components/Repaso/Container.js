import React from 'react';

import Button from "./Button";
import InputText from "./InputText";



class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            listElements: [],
            inputValues: {}

        }
    }

    toggleShow = () => {
        const newShowState = !this.state.show;
        this.setState({ show: newShowState })
    }

    addElements = () => {
        const newArray = this.state.listElements;
        // newArray.push(`Número ${this.state.listElements.length}`);
        newArray.push(this.state.inputValue);
        this.setState({ listElements: newArray })
    }

    // onChangeInput = (inputValue, name) => {
    //     console.log(name)
    //     this.setState({inputValue})
    // }

    onChangeInput = (inputValue, name) => {
        let newObject = Object.assign({}, this.state.inputValues, { [name]: inputValue })
        this.setState({ inputValues: newObject })
    }




    // onChangeInput = (inputValue, name) => {
    //     console.log(name)
    //     const obj = Object.assign({}, this.state.inputValues)
    //     const newObj = Object.assign(obj, {
    //         [name]: inputValue
    //     }) 

    //     this.setState({inputValue: newObj})
    // }

    render() {
        const { show, listElements, inputValues } = this.state;
        console.log(inputValues)
        return (
            <div>
                <InputText name="text" type="text" value={this.state.inputValues[this.name]} onChange={this.onChangeInput} />
                <InputText name="text2" type="text" value={this.state.inputValues[this.name]} onChange={this.onChangeInput} />
                <InputText name="date" type="date" value={this.state.inputValues[this.name]} onChange={this.onChangeInput} />
                <InputText name="number" type="number" value={this.state.inputValues[this.name]} onChange={this.onChangeInput} />
                <InputText name="color" type="color" value={this.state.inputValues[this.name]} onChange={this.onChangeInput} />
                <Button onClick={this.toggleShow} label={!show ? "Mostrar" : "Ocultar"} />
                <Button onClick={() => this.addElements()} label={"Sumar 1"} />
                <Button onClick={() => this.setState({ listElements: [] })} label={"Limpiar"} />

                {show && listElements.map(ele => <p>{ele}</p>)}

            </div>
        );
    }
}

export default Container;



