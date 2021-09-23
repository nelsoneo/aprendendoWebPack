import React from 'react';

const listCustomer = [
  {
    id: 1,
    name: 'Jose',
    skill: ['React', 'Node', 'CSS', 'JavaScript', 'HTML']
  },
  {
    id: 2,
    name: 'Andre',
    skill: ['CSS', 'JavaScript', 'HTML']
  },
  {
    id: 3,
    name: 'Miguel',
    skill: ['Java', 'CSS', 'JavaScript', 'HTML']
  },
  {
    id: 4,
    name: 'Pedro',
    skill: ['C#', 'GitHub', 'CSS', 'JavaScript', 'HTML']
  }
]

const App = () => {

  const showActionEvento = () => {
    console.log('Evento Activado no Click');
  }
  
  const myButton = <button onClick= {showActionEvento}>Mostrar Evento</button>

const renderListCustomer = (customer) => {
  return (
    <div key = {customer.id}>
        <li>{customer.name}</li>
        {customer.skill.map(renderSkillCustomer)}
    </div>
  )
}

const renderSkillCustomer = (skill) => {
  return (
    <div style = {{paddingLeft: 20}} key= {skill}>
      <li>{skill}</li>
    </div>
  )
}

  return (
      <div>
        <p>Digital Invovation one</p>
        <p>Bem-vindo a nosso primeiro Exercies</p>
        <div>
          <ul>
            {listCustomer.map(renderListCustomer)}
          </ul>
        </div>
        {myButton}
      </div>
    );
  };

export default App;
