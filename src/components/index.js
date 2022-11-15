import React from 'react';
import Form from './Form';
import Card from './Card';

class Table extends React.Component {
  state = {
    cardDescription: '',
    cardName: '',
    cardImage: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    cards: [],
    nameFilter: '',
    rareFilter: 'todas',
  };

  save = (event) => {
    event.preventDefault();
    const { cardDescription, cardName, cardImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare,
      cardTrunfo, cards } = this.state;
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
    this.setState({ cards: [...cards, { cardDescription,
      cardName,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo }],
    cardDescription: '',
    cardName: '',
    cardImage: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true });
  };

  ovo1 = () => {
    const { cardDescription, cardName, cardImage, cardRare } = this.state;
    let trfl = true;
    let trfl2 = true;
    if (cardDescription !== '' && cardName !== '') {
      trfl = false;
    }
    if (cardImage !== '' && cardRare !== '') {
      trfl2 = false;
    }
    if (trfl2 === false && trfl === false) {
      return false;
    }
  };

  ovo2 = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const a1 = parseInt(cardAttr1, 10);
    const a2 = parseInt(cardAttr2, 10);
    const a3 = parseInt(cardAttr3, 10);
    let r1 = true;
    let r2 = true;
    let r3 = true;
    let r = true;
    let o = true;
    const max = 210;
    const N9 = 90;
    if (a1 >= 0 && a1 <= N9) {
      r1 = false;
    }
    if (a2 >= 0 && a2 <= N9) {
      r2 = false;
    }
    if (a3 >= 0 && a3 <= N9) {
      r3 = false;
    }
    if ((a1 + a2 + a3) <= max) {
      r = false;
    }
    if (r1 === false && r2 === false && r3 === false && r === false) {
      o = false;
    }
    return o;
  };

  ovo = () => {
    const r1 = this.ovo1();
    const r2 = this.ovo2();
    if (r1 === false && r2 === false) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  handleChange = async (event) => {
    const { target } = event;
    const { name, value, type } = target;
    this.setState({ [name]: type === 'checkbox' ? target.checked : value }, () => {
      this.ovo();
    });
  };

  handleFilter = (arr) => {
    const { nameFilter, rareFilter } = this.state;
    const filteredName = arr.filter((card) => card.cardName.includes(nameFilter));
    if (rareFilter === 'todas') return filteredName;
    const rare = filteredName.filter((card) => card.cardRare === rareFilter);
    return rare;
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      cards,
      nameFilter,
      rareFilter,
    } = this.state;
    const returnHasTrunfo = () => {
      this.setState({ hasTrunfo: false });
    };
    const tru = true;
    const fal = false;
    const cardsFiltered = this.handleFilter(cards);
    return (
      <div>
        <div>
          <h1>Tryunfo</h1>
          <Form
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.save }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            returnHasTrunfo={ returnHasTrunfo }
            cardPreview={ tru }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div>
          <input
            data-testid="name-filter"
            type="text"
            name="nameFilter"
            value={ nameFilter }
            onChange={ this.handleChange }
          />
          <select
            data-testid="rare-filter"
            name="rareFilter"
            onChange={ this.handleChange }
            value={ rareFilter }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          {cardsFiltered.map((ele) => (<Card
            key={ ele.cardName }
            returnHasTrunfo={ returnHasTrunfo }
            cardPreview={ fal }
            cardName={ ele.cardName }
            cardDescription={ ele.cardDescription }
            cardAttr1={ ele.cardAttr1 }
            cardAttr2={ ele.cardAttr2 }
            cardAttr3={ ele.cardAttr3 }
            cardImage={ ele.cardImage }
            cardRare={ ele.cardRare }
            cardTrunfo={ ele.cardTrunfo }
          />))}
        </div>
      </div>
    );
  }
}

export default Table;
