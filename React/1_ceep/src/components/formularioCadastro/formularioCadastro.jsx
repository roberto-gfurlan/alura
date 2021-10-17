import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component{
    
    constructor(props){
        super(props);
        this.titulo="";
        this.texto="";
    }
    _handlerMudançaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
        
    }
    _handlerMudançaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value
        //console.log(this.texto)
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render(){
        return(
            <form className="form-cadastro" 
            onSubmit={this._criarNota.bind(this)}
            >
            <input 
            type="text" 
            placeholder="título" className="form-cadastro-input"
            onChange= {this._handlerMudançaTitulo.bind(this)}
            />
            <textarea 
            rows={15} 
            placeholder="escreva sua nota" className="form-cadastro-input"
            onChange={this._handlerMudançaTexto.bind(this)}>
             </textarea>
            <button className="form-cadastro-input form-cadastro-submit">criar nota</button>
          </form>
        )
    }
 
}

export default FormularioCadastro;
