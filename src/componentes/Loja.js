import React, {Component} from 'react';
import {LojaProvider} from '../context/LojaContext';
import BarraDeBusca from './BarraDeBusca';
import ListaDeProdutos from './ListaDeProdutos';
import CarrinhoDeCompras from './CarrinhoDeCompras';
import VisualizarProduto from "./visualizarProduto";
import {Route} from "react-router-dom";

class Loja extends Component {
    render() {
        return (
            <LojaProvider>
                <BarraDeBusca/>
                <Route path="/" exact component={ListaDeProdutos}/>
                <Route path="/visualizarProduto" exact component={VisualizarProduto}/>
                <CarrinhoDeCompras/>
            </LojaProvider>
        );
    }
}

export default Loja;