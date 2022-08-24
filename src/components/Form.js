import React from 'react';

class Form extends React.Component {
  render() {
    const handleSubmit = () => {
      console.log(';ofo');
    };
    return (
      <form onSubmit={ handleSubmit }>
        <label htmlFor="text">
          Nome
          <input type="text" id="text" data-testid="name-input" />
        </label>
        <label htmlFor="descriptiom">
          Descrição
          <input type="textarea" id="description" data-testid="description-input" />
        </label>
        <label htmlFor="atr1">
          Atributo 1
          <input type="number" id="atr1" data-testid="attr1-input" />
        </label>
        <label htmlFor="atr2">
          Atributo 2
          <input type="number" id="atr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="atr3">
          Atributo 3
          <input type="number" id="atr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="img">
          Imagem
          <input type="text" id="img" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          Raridade
          <select data-testid="rare-input" id="rare">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="tryunfo">
          Super Tryunfo
          <input type="checkbox" id="tryunfo" data-testid="trunfo-input" />
        </label>
        <input id="save" type="submit" data-testid="save-button" value="Submit" />
      </form>
    );
  }
}

export default Form;
