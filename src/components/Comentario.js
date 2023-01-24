// A primeira coisa a fazer na criação de um componente é importar o React, que esta na pasta node_modules
import React from 'react';

// Para usarmos o .css precisamos antes de mais nada importar o arquivo de configuração desejado

import './Comentario.css';

// Um componente basicamente é uma função em Javascript
// Note que nesta função o valor de retorno é um código HTML. O ato de inserir HTML dentro do Javascript recebe o nome de JSX

// Observe que adiconamos a class Comentario para incluir o css na estrutura desta apresentação
// Estamos agora inserindo uma propriedade no arquivo no caso estamos realizando uma adição, note o uso das chaves. Observe que na verdade estamos executando JavaScript no HTML --> JSX.

// Preciso passar as propriedades para meu componente poder exibir a proposta. As propriedades são passadas na forma de parâmetros para a função utilizada para definir meu componente. Note que estamos usando props como parâmetros, assim, tudo o que for string pode ser passado para props (que é um objeto) --> fique atento aos componentes Javascript e às children das <div>

const Comentario = props => {
    return (
            <div className="Comentario"> 
                <h2>{props.nome}:</h2>
                <h3>{props.email}</h3>
                <p>{props.children}</p>
                <p>{props.data.toString()}</p>
            </div>
            ) 
};

// Para que um componente fique disponível para uso, devemos antes de mais nada exportá-lo

export default Comentario;
