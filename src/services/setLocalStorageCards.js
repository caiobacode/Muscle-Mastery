import getLocalStorageCards from "./getLocalStorageCards"

const setLocalStorage = (value, deleteOrAdd) => {
  const localStorageCards = getLocalStorageCards()

  if (deleteOrAdd === 'delete') {
    const newLocalStorage = localStorageCards.filter((c) => c.cardName !== value)
    localStorage.setItem('cards', JSON.stringify(newLocalStorage))
  }
  else {
    const newLocalStorage = [...localStorageCards, value ]
    localStorage.setItem('cards', JSON.stringify(newLocalStorage))
  }
}

export default setLocalStorage