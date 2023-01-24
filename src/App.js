// Precisamos fazer o importe do React

import React, { Component } from 'react';

// Antes de utiliarmos o .css precisamos importá-lo
import './App.css';

// Antes de usarmos um componente precisamos importá-lo

import Comentario from './components/Comentario';

// Para automatizar o componente precisamos passar os dados desejados para dentro do componente --> para isso usamos propriedades --> como nome; email, etc.
// Mas atenção parra utilizar os componentes dessa forma precisamos passar para o componente --> para que ele as receba e possa assim exibir. Fique atento!

// Podemos potencializar ainda mais uma propriedade trabalhando com estados (atribuindo inteligência ao componente), transformando nossa função numa classe

// A classe é um componente inteligente e podemos passar estados para ele, estes estados são chamados de state. Hoje ao invés de usar state utiliza-se Hooks
class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joao@gmail.com',
        data: new Date(2023, 1, 23),
        mensagem: 'Olá tudo bem?'
      },
      {
        nome: 'Pedro',
        email: 'pedro@gmail.com',
        data: new Date(2023, 1, 20),
        mensagem: 'Olá tudo bem sim claro!!!'
      },
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

// Observe como acessamos o state! Observe o uso do map() para mapear o uso de nossa função

// Neste momento 23 --> faremos um botão para manipular o componente criado em 22
// Vamos criar aqui uma função que será controlada pelo botão

// Observe que precisamos anular este evento para trabalhar dinâmicamente
adicionarComentario = evento => {
  // evento.preventDefault();
  // console.log('Adicionando comentário ...')

  //const novoComentario = {
  //    nome: 'Maria',
  //    email: 'maria@gmail.com',
  //    data: new Date(),
  //     mensagem: 'Olá pessoal !!!',
  //}
  // Vamos melhorar esse código
  // let lista = this.state.comentarios;
  // lista.push(novoComentario);
  // this.setState({ novoComentario: lista});

  // Uma abordagem mais interessante para esse processo é o que segue

  evento.preventDefault();
  const novoComentario = { ...this.state.novoComentario, data: new Date() }
  this.setState({
    comentarios: [ ...this.state.comentarios, novoComentario ], 
    novoComentario: { nome: '', email: '', mensagem: '' }
  })
}

// Preparando para a função onChange. Note que ao usar [name] podemos trabalhar agtribuindo nome ou email para a variável nome

digitacao = evento => {
  const { name, value } = evento.target;
  //const { value, name } = evento.target;
  // const value = evento.target.value;
  // const name = evento.target.name;
  this.setState({ novoComentario: {...this.state.novoComentario, [name]: value } });
}

// Queremos agora que nossa aplicação responda de forma dinâmica, para isso vamos comentar o button e inserir um formulário, observe as alterações...

  render() {
    return (
      <div className="App">
        <h1>Meu projeto!!!</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario 
            key={indice}
            nome={comentario.nome} 
            email={comentario.email}
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))} 
       {/*} <button onClick={this.adicionarComentario}>Adicionar um comentário</button> */}
       <form method='post' onSubmit={this.adicionarComentario}>
        <h2>Adiconar Comentário</h2>
        <div>
          <input 
            type="text" 
            name="nome" 
            value={this.state.novoComentario.nome}
            onChange={this.digitacao}
            placeholder='Digite seu nome'/>
        </div>
        <div>
          <input 
            type="email" 
            name="email" 
            value={this.state.novoComentario.email}
            onChange={this.digitacao}
            placeholder='Digite seu email'/>
        </div>
        <div>
          <textarea 
            name="mensagem" 
            value={this.state.novoComentario.mensagem}
            onChange={this.digitacao}
            rows="4" />
        </div>
        <button type="submit">Adicionar Comentario</button>
       </form>
      </div>
    );
  }
}

export default App;
