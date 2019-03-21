import React, {Component} from 'react';
import {LojaContext} from '../context/LojaContext';
import {Button, Card} from "react-bootstrap";
import BancoDeDados from "../bd/BancoDeDados";
import FormataMoeda from "./FormataMoeda";


class VisualizarProduto extends Component {

    voltar() {
        this.props.history.push('/produtos');
    }

    render() {
        let {id} = this.props.match.params;
        let produto = BancoDeDados.getProduto(id);
        return (
            <Card className="text-center">
                <Card.Header as="h5">
                    {produto.nome}
                </Card.Header>
                <Card.Img style={{width: '25%', margin: 'auto'}} variant="top" src={produto.imagem}/>
                <Card.Body style={{width: '60%', margin: 'auto'}}>
                    <Card.Title><FormataMoeda valor={produto.preco}/></Card.Title>
                    <Button variant="outline-primary" block
                            onClick={() => this.context.comprar(produto)}>
                        Comprar
                    </Button>
                    <Button variant="outline-danger" block
                            onClick={() => this.voltar()}>
                        Voltar
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

VisualizarProduto.contextType = LojaContext;

export default VisualizarProduto;