import React, {Component} from 'react';
import {LojaContext} from '../context/LojaContext';


class VisualizarProduto extends Component {

    render() {
        return (
            <div>
                Visualizar produto
            </div>
        );
    }
}

VisualizarProduto.contextType = LojaContext;

export default VisualizarProduto;