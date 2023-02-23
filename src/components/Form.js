import React from 'react';
import PropTypes from 'prop-types';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#2196f3',
  '&:hover': {
    backgroundColor: '#1976d2',
  },
  '&:disabled': {
    backgroundColor: '#386494',
    color: '#8c8c8c',
  },
}));

class Form extends React.Component {
  render() {
    const { cardName } = this.props;
    const { cardDescription } = this.props;
    const { cardAttr1 } = this.props;
    const { cardAttr2 } = this.props;
    const { cardAttr3 } = this.props;
    const { cardImage } = this.props;
    const { cardRare } = this.props;
    const { cardTrunfo } = this.props;
    const { hasTrunfo } = this.props;
    const { isSaveButtonDisabled } = this.props;
    const { onInputChange } = this.props;
    const { onSaveButtonClick } = this.props;

    const trunfo = (element) => {
      if (element === true) {
        return (
          <div className='trunfo-div'>
            <label htmlFor='disbled-input'>Você já tem um GIGACHAD em seu baralho</label>
            <Checkbox
              name="cardTrunfo"
              data-testid="trunfo-input"
              checked
              onChange={ onInputChange }
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 20 },
                color: pink[800],
                '&.Mui-checked': {
                color: pink[600],
                },
              }}
            />
          </div>
        );
      }

      return (
        <div className='trunfo-div'>
        <label htmlFor='cardTrunfo' className='trunfo-label'>Sua carta é um GIGACHAD?</label>
        <Checkbox
        name="cardTrunfo"
        data-testid="trunfo-input"
        checked={ cardTrunfo }
        onChange={ onInputChange }
        sx={{
          '& .MuiSvgIcon-root': { fontSize: 20 },
          color: 'black',
        }}
      />
        </div>
      );
    };
    return (
      <div className='card-form'>
        <div className='small-form-div'>
          <div className='cardname-div'>
          <TextField
          sx={{
            width: '60%',
            marginLeft: '20%'
          }}
          id="outlined-helperText"
          label="Nome"
          autoComplete='off'
          name="cardName"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
          />
          </div>
          <div className='attr-div'>
          <div className='one-attr-div'>
          <TextField
          name="cardAttr1"
          id="outlined-number"
          label="Volume"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
          />
          </div>
          <div className='one-attr-div'>
          <TextField
          name="cardAttr2"
          id="outlined-number"
          label="Definição"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
          />
          </div>
          <div className='one-attr-div'>
          <TextField
          name="cardAttr3"
          sx={{
            color: 'black'
          }}
          id="outlined-number"
          label="Simetria"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
          />
          </div>
          </div>
          <FormControl sx={{ m: 1, minWidth: 80, maxWidth: '60%', marginLeft: '20%' }}>
          <InputLabel sx={{fontSize: '17px'}} id="demo-simple-select-helper-label">Raridade</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="cardRare"
            label="Raridade"
            data-testid="rare-input"
            sx={{fontSize: '17px'}} 
            value={ cardRare }          
            onChange={ onInputChange }
          >
            <MenuItem value='normal'>Normal</MenuItem>
            <MenuItem value='raro'>Raro</MenuItem>
            <MenuItem value='muito raro'>Muito raro</MenuItem>
          </Select>
          </FormControl>
          <TextField
          sx={{
            width: '60%',
            marginLeft: '20%',
            color: 'black',
          }}
          id="outlined-helperText"
          label="Link da sua imagem"
          placeholder='cole o link aqui'
          autoComplete='off'
          name="cardImage"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
          />
        </div>
        <div className='save-description-div'>
          <div className='only-description-div'>
          <label htmlFor='cardDescription' className='description-label'>Resumo</label>
          <textarea
            name="cardDescription"
            type="textarea"
            autoComplete="off"
            maxLength={200}
            className='description-input'
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            />
          </div>
          { trunfo(hasTrunfo) }
          <ColorButton 
          variant="contained"
          sx={{
            width: '40%',
            marginLeft: '30%'
          }}
          disabled={ isSaveButtonDisabled }
          type="submit"
          data-testid="save-button"
          value="Salvar"
          onClick={ onSaveButtonClick }
          >
            Salvar
          </ColorButton>
        </div>
      </div>
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
