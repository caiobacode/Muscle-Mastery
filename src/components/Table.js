import React from 'react';
import Form from './Form';
import Card from './Card';
import img1 from '../media/form1.png'
import img2 from '../media/form2.png'
import img3 from '../media/form3.png'
import img4 from '../media/form4.png'
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const allFormImages = [img1, img2, img3, img4]
const getRamdowImage = () => {
  const ramdowNumber = Math.floor(Math.random() * 4);
  return allFormImages[ramdowNumber]
}

const actualCards = [
  {
    cardDescription: 'Bodybuilder de 27 anos, campeão 5 vezes seguidas do Mr.Olympia, Chris atualmente é o melhor do mundo.',
    cardName: 'Chris Bumstead',
    cardImage: 'https://pbs.twimg.com/profile_images/1408265670521917441/12q0mSTo_400x400.jpg',
    backGroundImage: img2,
    cardAttr1: 68,
    cardAttr2: 70,
    cardAttr3: 69,
    cardRare: 'muito raro',
    cardTrunfo: false,
  },
  {
    cardDescription: 'Arnold é um fisiculturista, ator, empresário e político, já conquistou 7 títulos do Mr.Olympia.',
    cardName: 'Arnold Schwarzenegger',
    cardImage: 'https://www.mundoboaforma.com.br/wp-content/uploads/2015/01/arnold.jpg',
    backGroundImage: img1,
    cardAttr1: 69,
    cardAttr2: 69,
    cardAttr3: 69,
    cardRare: 'muito raro',
    cardTrunfo: false,
  },
  {
    cardDescription: 'Detentor do recorde de oito títulos consecutivos de Mr. Olympia, Ronnie é o melhor da história.',
    cardName: 'Ronnie Coleman',
    cardImage: 'https://mandesager.dk/wp-content/uploads/2018/03/Ronnie-Coleman-The-King_1.jpg',
    backGroundImage: img2,
    cardAttr1: 70,
    cardAttr2: 69,
    cardAttr3: 66,
    cardRare: 'muito raro',
    cardTrunfo: false,
  },
  {
    cardDescription: '"THE MUTANT", Nick é um dos atletas que está evoluindo mais rápido, mesmo sendo novo, é enorme.',
    cardName: 'Nick Walker',
    cardImage: 'https://imagens.mdig.com.br/thbs/54327mn.jpg',
    backGroundImage: img2,
    cardAttr1: 75,
    cardAttr2: 66,
    cardAttr3: 68,
    cardRare: 'raro',
    cardTrunfo: false,
  },
  {
    cardDescription: 'Ramom é famoso pela genética absurda, o Brasileiro conquistou o segundo lugar no Mr.Olympia',
    cardName: 'Ramom dino',
    cardImage: 'https://amadahipertrofia.com/wp-content/uploads/2021/09/ramon-dino.jpg',
    backGroundImage: img2,
    cardAttr1: 68,
    cardAttr2: 69,
    cardAttr3: 68,
    cardRare: 'raro',
    cardTrunfo: false,
  },
]

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
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    cards: actualCards,
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
  };

  save = (event) => {
    event.preventDefault();
    const { cardDescription, cardName, cardImage, backGroundImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare,
      cardTrunfo, cards } = this.state;
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
    this.setState({ cards: [...cards, { cardDescription,
      cardName,
      cardImage,
      backGroundImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo }],
    cardDescription: '',
    cardName: '',
    cardImage: '',
    backGroundImage: getRamdowImage(),
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
    const { nameFilter, rareFilter, trunfoFilter } = this.state;
    if (trunfoFilter) {
      const onlyTrunfo = arr.filter((card) => card.cardTrunfo === true);
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
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      cards,
      nameFilter,
      rareFilter,
      trunfoFilter,
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
            cardTrunfo={ cardTrunfo }
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
            cardTrunfo={ cardTrunfo }
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
          disabled={ trunfoFilter }
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
            disabled={ trunfoFilter }
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

          <label htmlFor='cardTrunfo' className='trunfo-filter'>Apenas o GIGACHAD</label>
          <Checkbox
          data-testid="trunfo-filter"
          name="trunfoFilter"
          checked={ trunfoFilter }
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
            cardTrunfo={ ele.cardTrunfo }
            />))}
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
