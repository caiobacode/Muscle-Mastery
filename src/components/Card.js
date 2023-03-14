import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import setLocalStorage from '../services/setLocalStorageCards';

class Card extends React.Component {
  state = {
    removeButton: false,
  };

  render() {
    const { returnHasTrunfo } = this.props;
    const { cardPreview } = this.props;
    const { cardName } = this.props;
    const { cardDescription } = this.props;
    const { cardAttr1 } = this.props;
    const { cardAttr2 } = this.props;
    const { cardAttr3 } = this.props;
    const { cardImage } = this.props;
    const { backGroundImage } = this.props;
    const { cardRare } = this.props;
    const { gigaChad } = this.props;
    const { removeButton } = this.state;
    const getRare = () => {
      const previewOrNot = cardPreview ? 'rare-div-preview' : 'rare-div';
      if (cardRare === 'muito raro') return `${previewOrNot} muito-raro`
      return `${previewOrNot} ${cardRare}`
    }
    const handleClickDelete = () => {
      setLocalStorage(cardName, 'delete')
      this.setState({ removeButton: true });
      if (gigaChad) returnHasTrunfo();
    };
    return (
      <div className='sla-div'>
        {
          !removeButton
      && (
        <div className={cardPreview ? 'card-preview' : 'card'}>
          <div className='card-title-div'>
            <h1 className='name-card' data-testid="name-card">{ cardName }</h1>
          </div>
          <div className={cardPreview ? 'image-div-preview' : 'image-div'}>
            <img className='background-img-blur' src={ backGroundImage } alt='no-img-blur'/>
            <img className={cardPreview ? 'background-img-preview' : 'background-img'} src={ backGroundImage } alt='no-img'/>
            <img className={cardPreview ? 'image-blur-preview' : 'image-blur'} src={ cardImage } alt='img-blur' data-testid="image-card" />
            <img className={cardPreview ? 'image-preview' : 'image'} src={ cardImage } alt={ cardName } data-testid="image-card" />
          </div>
          <div className={cardPreview ? 'details-div-preview' : 'details-div'}>
          <div className='small-card-div'>
          <div className={cardPreview ? 'small-texts-divs-preview' : 'small-texts-divs'}>
          <p className={cardPreview ? 'atr-preview' : 'atr'} data-testid="attr1-card">Volume: {cardAttr1}</p>
          <p className={cardPreview ? 'atr-preview' : 'atr'} data-testid="attr2-card">Definição: {cardAttr2}</p>
          <p className={cardPreview ? 'atr-preview' : 'atr'}data-testid="attr3-card">Simetria: {cardAttr3}</p>
          </div>
          <div className={getRare()}>
          <p className={cardPreview ? 'rare-card-preview' : 'rare-card'} data-testid="rare-card">{ cardRare }</p>
          </div>
          </div>
          <div className='description-delete-div'>
          <div className={cardPreview ? 'card-description-div-preview' : 'card-description-div'}>
          <p className={cardPreview ? 'description-card-preview' : 'description-card'} data-testid="description-card">{ cardDescription }</p>
          </div>
          <div className='delete-trunfo-div'>
          { gigaChad && 
          <div className='trunfo-giga'>
          <h2 className='gigachad' data-testid="trunfo-card">GIGACHAD</h2> 
          </div>
          }
          {
            !cardPreview && (
              <IconButton
              aria-label="delete"
              data-testid="delete-button"
              onClick={ handleClickDelete }
              >
                <DeleteIcon sx={{ color: 'red'}}/>
              </IconButton>)
          }
          </div>
          </div>
          </div>

        </div>)
        }
      </div>
    );
  }
}

Card.propTypes = {
  returnHasTrunfo: PropTypes.func.isRequired,
  cardPreview: PropTypes.bool.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  gigaChad: PropTypes.bool.isRequired,
};

export default Card;
