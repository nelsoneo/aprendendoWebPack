import React from 'react';


const buttomA = <button>Historico de clientes</button>
const buttomB = <button>Cadastrar clientes</button>

const hasCustomer = true;

const App = () => {


const ShowHistorico = () => (
    <div>
    Cliclar no botão abaixo
      <br />
      {buttomA}
  </div>
)

const AddCustomer = () => (
    <div>
      Cliclar no botão Cadastrar Clintes
      <br />
      {buttomB}
  </div>
)

const renderShowCustomer = () => {
  if (!hasCustomer) return null

  return (
    <div>
        <h1>Nome do cliente: Nelson HG</h1>
    </div>
  )
}

  return (
    <div>
      <p>Digital Invovation one</p>
      <p>Bem-vindo a nosso primeiro Exercies</p>
      {hasCustomer ? ShowHistorico() : AddCustomer()}
      <div>
        {renderShowCustomer()}
      </div>
    </div>
  );
};

export default App;
