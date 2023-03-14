import React from 'react';

// COMPONENTS
import Form from './Form';
import Card from './Card';

// UTILS/SERVICES
import getLocalStorageCards from '../services/getLocalStorageCards';
import setLocalStorage from '../services/setLocalStorageCards';
import getRamdowImage from '../utils/getRamdomImages';
import verifyHasTrunfo from '../utils/verifyHasTrunfo';
import actualCards from '../utils/cards';

// STYLE/MUIMATERIAL
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

class Table extends React.Component {
  state = {
    cardDescription: '',
    cardName: '',
    cardImage: '',
    backGroundImage: getRamdowImage(),
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: '',
    gigaChad: false,
    isSaveButtonDisabled: true,
    hasTrunfo: verifyHasTrunfo(),
    cards: [...actualCards, ...getLocalStorageCards()],
    nameFilter: '',
    rareFilter: 'todas',
    gigachadFilter: false,
  };

  save = (event) => {
    event.preventDefault();

    // Pegando os atributos da card no state
    const { cardDescription, cardName, cardImage, backGroundImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare, gigaChad, cards } = this.state;

    // Declarando somente a card para facilitar
    const thisCard = { 
      cardDescription, cardName, cardImage, backGroundImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare, gigaChad };

    // Salvando card no localStorage, para quando recarregar a pagina, manter as cartas
    setLocalStorage( thisCard, 'add')

    if (gigaChad === true) {
      this.setState({ hasTrunfo: true });
    }

    // Redefinindo state para o padrao, e salvando a carta, no campo "cards"
    this.setState({ cards: [...cards, thisCard],
    cardDescription: '',
    cardName: '',
    cardImage: '',
    backGroundImage: getRamdowImage(),
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: '',
    gigaChad: false,
    isSaveButtonDisabled: true });
  };

  validateTextFields = () => {
    const { cardDescription, cardName, cardImage, cardRare } = this.state;
    if (cardDescription === '' || cardName === '') {
      return false
    }
    if (cardImage === '' || cardRare === '') {
      return false
    }
    return true
  };

  validateAttributes = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);

    const max = 210;

    if (attr1 < 0 || attr1 > 90) {
      return false;
    }
    if (attr2 < 0 || attr2 > 90) {
      return false;
    }
    if (attr3 < 0 || attr3 > 90) {
      return false;
    }
    if ((attr1 + attr2 + attr3) > max) {
      return false;
    }
    return true
  };

  validateForms = () => {
    const validTextFields = this.validateTextFields();
    const validAtributes = this.validateAttributes();
    if (validTextFields && validAtributes) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  handleChange = async (event) => {
    const { target } = event;
    const { name, value, type } = target;
    this.setState({ [name]: type === 'checkbox' ? target.checked : value }, () => {
      this.validateForms();
    });
  };

  handleFilter = (arr) => {
    const { nameFilter, rareFilter, gigachadFilter } = this.state;
    if (gigachadFilter) {
      const onlyTrunfo = arr.filter((card) => card.gigaChad === true);
      return onlyTrunfo;
    }
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
      backGroundImage,
      cardRare,
      gigaChad,
      isSaveButtonDisabled,
      hasTrunfo,
      cards,
      nameFilter,
      rareFilter,
      gigachadFilter,
    } = this.state;
    const returnHasTrunfo = () => {
      this.setState({ hasTrunfo: false });
    };
    const tru = true;
    const fal = false;
    const cardsFiltered = this.handleFilter(cards);
    return (
      <div>
        <div className='input-card'>
          <div className='form-div'>
            <div className='input-title-div'>
              <h3 className='input-title'>Criar card</h3>
            </div>
            <div className='text-div'>
              <text className='input-text'>Cada atributo não pode ser um número negativo, e nem um número maior do que 90,
                os três atributos somados não podem passar de 210.<br></br>Só é possível possuir uma carta "GIGACHAD".
              </text>
            </div>
          <div className='only-form'> 
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
            gigaChad={ gigaChad }
            hasTrunfo={ hasTrunfo }
            />
          </div>
          </div>
          <div className='preview-card'>
          <h3 className='card-preview-title'>Card Preview</h3>
          <Card
            returnHasTrunfo={ returnHasTrunfo }
            cardPreview={ tru }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            backGroundImage={backGroundImage}
            cardRare={ cardRare }
            gigaChad={ gigaChad }
            />
          </div>
        </div>
        <div className='done-cards'>
          <div className='filter-div'>
          <div className='filter-title-div'>
            <h3 className='filter-title'>Filtrar cards</h3>
          </div>
          <div className='only-filters-div'>
          <TextField
          id="outlined-helperText"
          label="Nome"
          autoComplete='off'
          disabled={ gigachadFilter }
          name="nameFilter"
          data-testid="name-filter"
          value={ nameFilter }
          onChange={ this.handleChange }
          />
          <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel sx={{fontSize: '17px'}} id="demo-simple-select-helper-label">Raridade</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            disabled={ gigachadFilter }
            data-testid="rare-filter"
            name="rareFilter"
            label="Raridade"
            sx={{fontSize: '17px'}} 
            value={ rareFilter }          
            onChange={ this.handleChange }
            >
            <MenuItem value='todas'>Todas</MenuItem>
            <MenuItem value='normal'>Normal</MenuItem>
            <MenuItem value='raro'>Raro</MenuItem>
            <MenuItem value='muito raro'>Muito raro</MenuItem>
          </Select>
          </FormControl>
          <div className='trunfo-filter-div'>

          <label htmlFor='gigachadFilter' className='trunfo-filter'>Apenas o GIGACHAD</label>
          <Checkbox
          data-testid="trunfo-filter"
          name="gigachadFilter"
          checked={ gigachadFilter }
          onClick={ this.handleChange }
          sx={{
            width: '25px',
            '& .MuiSvgIcon-root': { fontSize: 20 },
            color: 'black',
          }}
          />
          </div>
          </div>
          </div>
          <div className='only-cards-div'>
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
            backGroundImage={ ele.backGroundImage}
            cardRare={ ele.cardRare }
            gigaChad={ ele.gigaChad }
            />))}
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
