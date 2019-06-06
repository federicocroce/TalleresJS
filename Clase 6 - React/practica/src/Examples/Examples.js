import React, { Component } from 'react';

import MyComponentExporDefault from "./MyComponentExporDefault";
import { MyComponentMuiltiExport1, MyComponentMuiltiExport2 } from "./MyComponentMuiltiExport";
import MyComponentMixExport, { MyComponentMixExport1, MyComponentMixExport2 } from "./MyComponentMixExport";

class Examples extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true,
            thisP: false,
            showContent: true
        };

        this.arrayExample = ["Fede", "Pablo", "Nico"];
    }


    // TestComponent = param => <p>{param}</p> // Creación del componente

    TestComponent = param => { // Creación del componente
        return (
            <div>
                <h1>Ejemplo de Componente</h1>
                <p>{param}</p>
            </div>
        )
    }


    toggleStateToShow = () => {

        /** Forma Incorrecta */
        // this.setState({ showContent: !this.state.showContent })

        /** Forma Corercta pero no óptima */
        const newShowValue = !this.state.showContent;
        this.setState({ showContent: newShowValue })

        /** Forma Correcta */
        this.setState((state, props) => (
            { showContent: !state.showContent })
        );
    }

    render() {
        return (
            <div>

                {/*--------------- INVOCACIÓN DE UN COMPONENTE ---------------*/}
                {this.TestComponent("Esto es un prámetro")}
                {/* --------------------------------------------------------- */}


                {/*--------------- CONDICIONAL ---------------*/}
                <h1>Ejemplo de condicional único</h1>
                {this.state.show && // show = true                        
                    <p>Se muestra el párrafo</p>
                }

                <h1>Ejemplo de condicional</h1>
                {this.state.thisP ? // thisP = true
                    <p>Se muestra este párrafo</p>
                    : // thisP = false
                    <p>Se muestra este otro párrafo</p>
                }
                {/* --------------------------------------------------------- */}


                {/*--------------- EJECUCIÓN DE UNA FUNCIÓN ---------------*/}
                <h1>Ejemplo de ejecución de una función</h1>
                <button onClick={() => alert("Callback en JSX")}>Botón</button>
                {/* ------------------------------------------------------ */}

                <h1>Ejemplo para recorrer un array</h1>
                {/*--------------- RECORRER ARRAY ---------------*/}
                {
                    this.arrayExample.map((element, index) => <p key={index}>{element}</p>)
                }
                {/* ------------------------------------------------------ */}

                <h1>Componentes importados</h1>
                {/*--------------- COMPONENTES IMPORTADOS ---------------*/}
                <MyComponentMixExport />
                <MyComponentMixExport1 />
                <MyComponentMixExport2 />
                {/* ------------------------------------------------------ */}


                {/*--------------- CAMBIOS DE ESTADOS ---------------*/}
                <h1>Cambios de estados</h1>

                {this.state.showContent && <p>Se muestra el párrafo</p>}

                <button onClick={() => this.toggleStateToShow()}>Muestra/Oculta</button>


            </div>
        );
    }
}

export default Examples;
