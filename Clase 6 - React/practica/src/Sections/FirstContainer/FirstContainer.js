import React, { Component } from 'react';

import InputText from '../../Components/InputText/InputText';
import Button from '../../Components/Button/Button';

import './FirstContainer.scss'

class FirstContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: "Nuevo Item",
            list: [],
            buttonShowList: {
                state: true,
                label: "Ocultar",
            }
        };
    }


    onChangeValue = ({ value, name }) => {
        this.setState({ inputValue: value })
    }

    onChangeList = () => {
        this.setState(({ list, inputValue }) => (
            { list: [...list, 
                {
                    id: new Date(),
                    value: inputValue
                }
            ], inputValue: "" }
        ));
    }

    ToggleShowList = () => {
        this.setState((state, props) => (
            {
                buttonShowList: {
                    state: !state.buttonShowList.state,
                    label: !state.buttonShowList.state ? "Ocultar" : "Mostrar"
                }
            }
        ));
    }

    render() {
        return (
            <div className="first-container">

                <div>
                    <InputText name="inputList" value={this.state.inputValue} placeholder="Esto es un Placeholder" onChangeValue={(change) => this.onChangeValue(change)} />

                    <Button onClick={() => this.onChangeList()} disabled={!this.state.inputValue} label="Agregar Item" />
                    <Button onClick={() => this.ToggleShowList()} label={this.state.buttonShowList.label} />
                    <Button onClick={() => this.setState({ list: [] })} label="Limpiar" />
                </div>

                <h2>Listado:</h2>
                {this.state.buttonShowList.state &&
                    <ul>
                        {
                            this.state.list.map((ele, index) =>
                                <div className="list-element" key={index}>
                                    <li>{ele.value}</li>
                                    <Button className="remove-element-list" onClick={() => this.setState({ list: this.state.list.filter(e => e.id != ele.id) })}>X</Button>
                                </div>
                            )
                        }
                    </ul>
                }

            </div>
        );
    }
}

export default FirstContainer;
