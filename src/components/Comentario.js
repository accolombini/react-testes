// A primeira coisa a fazer na criação de um componente é importar o React, que esta na pasta node_modules
import React from 'react';

// Para usarmos o .css precisamos antes de mais nada importar o arquivo de configuração desejado

import './Comentario.css';

// Importando uma imagem

import imagemUsuario from './user.png';

// Um componente basicamente é uma função em Javascript
// Note que nesta função o valor de retorno é um código HTML. O ato de inserir HTML dentro do Javascript recebe o nome de JSX

// Observe que adiconamos a class Comentario para incluir o css na estrutura desta apresentação
// Estamos agora inserindo uma propriedade no arquivo no caso estamos realizando uma adição, note o uso das chaves. Observe que na verdade estamos executando JavaScript no HTML --> JSX.

// Preciso passar as propriedades para meu componente poder exibir a proposta. As propriedades são passadas na forma de parâmetros para a função utilizada para definir meu componente. Note que estamos usando props como parâmetros, assim, tudo o que for string pode ser passado para props (que é um objeto) --> fique atento aos componentes Javascript e às children das <div>

const Comentario = props => {
    // Foi apenas um teste para elaborar melhor um estilo
    // const estilo = {
        // color: 'red',
        // padding: '10px',
        // fontSize: '30px'   
    //}
    return (
            <div className="Comentario"> 
                <img class="avatar" src={imagemUsuario} alt={props.nome}/>
                <div class="conteudo">
                    <h2 class="nome">{props.nome}:</h2>
                    <h3 class="email">{props.email}</h3>
                    <p class="mensagem">{props.children}</p>
                    <p class="data">{props.data.toString()}</p>
                    <button onClick={props.onRemove}>&times;</button>
                </div>
            </div>
            ) 
};

// Para que um componente fique disponível para uso, devemos antes de mais nada exportá-lo

export default Comentario;
