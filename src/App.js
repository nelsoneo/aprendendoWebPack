import React from 'react';

const buttomA = <button>Historico de clientes</button>

const hasCustomer = false

const App = () => {
  return (
    <div>
      <p>Digital Invovation one</p>
      <p>Bem-vindo a nosso primeiro Exercies</p>
      {hasCustomer && (
        <div>
        {buttomA}
      </div>
      )}
    </div>
  );
};

export default App;
