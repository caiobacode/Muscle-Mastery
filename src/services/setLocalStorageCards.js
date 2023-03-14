import getLocalStorageCards from "./getLocalStorageCards"

const setLocalStorage = (key, value, deleteOrAdd) => {
  const localStorageCards = getLocalStorageCards()

  if (deleteOrAdd === 'delete') {
    const newLocalStorage = localStorageCards.filter((c) => c.cardName !== value)
    localStorage.setItem(key, JSON.stringify(newLocalStorage))
  }
  else {
    const newLocalStorage = [...localStorageCards, value ]
    localStorage.setItem(key, JSON.stringify(newLocalStorage))
  }
}

export default setLocalStorage