import React from 'react';

const buttomA = <button>Historico de clientes</button>
const buttomB = <button>Cadastrar clientes</button>

const hasCustomer = true

const App = () => {

  const renderShowHistorico = () => {
    <div>
    Cliclar no botão abaixo
      <br />
      {buttomA}
  </div>
}

const renderAddCustomer = () => {
    <div>
      Cliclar no botão Cadastrar Clintes
      <br />
      {buttomB}
  </div>
}

  return (
    <div>
      <p>Digital Invovation one</p>
      <p>Bem-vindo a nosso primeiro Exercies</p>
      {hasCustomer ? renderShowHistorico() : renderAddCustomer()}
      {/* {hasCustomer ? renderShowHistorico() : renderAddCustomer()} */}
    </div>
  );
};

export default App;
