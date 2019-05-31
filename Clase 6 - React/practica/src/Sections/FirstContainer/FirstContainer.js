import React, { Component } from 'react';

import InputText from '../../Components/InputText/InputText';
import Button from '../../Components/Button/Button';

class FirstContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: "algo",
            list:[]
        };
    }


    onChangeValue = ({value, name}) => {
        this.setState({inputValue : value})
    }

    onChangeList = () => {
        let newList = [...this.state.list];
        newList.push(this.state.inputValue);
        this.setState({list: newList, inputValue:""});
    }

    render() {
        return (
            <div>

                <InputText name="inputList" value={this.state.inputValue} placeholder="Esto es un Placeholder" onChangeValue={(change) => this.onChangeValue(change)}/>
                <Button onClick={() => this.onChangeList()} label="Esto es un boton" />

                <ul>
                {                   
                    this.state.list.map((ele, index ) => <li key={index}>{ele}</li>)
                }
                </ul>

            </div>
        );
    }
}

export default FirstContainer;
