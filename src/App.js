import React from 'react';

const buttomA = <button>Historico de clientes</button>
const buttomB = <button>Cadastrar clientes</button>

const hasCustomer = true

const App = () => {
  return (
    <div>
      <p>Digital Invovation one</p>
      <p>Bem-vindo a nosso primeiro Exercies</p>
      {hasCustomer ? (
        <div>
          <p>Cliclar no botão abaixo</p>
          <br />
        {buttomA}
      </div>
      ) : (
        <div>
          <p>Cliclar no botão Cadastrar Clintes</p>
          <br />
          {buttomB}
        </div>
      )}
    </div>
  );
};

export default App;
