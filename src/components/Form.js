import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const handleSubmit = () => {
      console.log(';ofo');
    };
    const { cardName } = this.props;
    const { cardDescription } = this.props;
    const { cardAttr1 } = this.props;
    const { cardAttr2 } = this.props;
    const { cardAttr3 } = this.props;
    const { cardImage } = this.props;
    const { cardRare } = this.props;
    const { cardTrunfo } = this.props;
    const { isSaveButtonDisabled } = this.props;
    const { onInputChange } = this.props;
    const { onSaveButtonClick } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <label htmlFor="text">
          Nome
          <input
            value={ cardName }
            type="text"
            id="text"
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descriptiom">
          Descrição
          <input
            value={ cardDescription }
            type="textarea"
            id="description"
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atr1">
          Atributo 1
          <input
            value={ cardAttr1 }
            type="number"
            id="atr1"
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atr2">
          Atributo 2
          <input
            value={ cardAttr2 }
            type="number"
            id="atr2"
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atr3">
          Atributo 3
          <input
            value={ cardAttr3 }
            type="number"
            id="atr3"
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="img">
          Imagem
          <input
            value={ cardImage }
            type="text"
            id="img"
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            value={ cardRare }
            data-testid="rare-input"
            id="rare"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="tryunfo">
          Super Tryunfo
          <input
            checked={ cardTrunfo }
            type="checkbox"
            id="tryunfo"
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
        </label>
        <input
          disabled={ isSaveButtonDisabled }
          id="save"
          type="submit"
          data-testid="save-button"
          value="Submit"
          onClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
