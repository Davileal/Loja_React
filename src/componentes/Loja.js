import React, {Component} from 'react';
import ListaDeProdutos from './ListaDeProdutos';
import CarrinhoDeCompras from './CarrinhoDeCompras';
import VisualizarProduto from "./visualizarProduto";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./Login";

class Loja extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/produtos" exact component={ListaDeProdutos}/>
                    <Route path="/visualizarProduto/:id" exact component={VisualizarProduto}/>
                    <CarrinhoDeCompras/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Loja;