import getLocalStorageCards from "../services/getLocalStorageCards"

const verifyHasTrunfo = () => {
  const allCards = getLocalStorageCards()
  return !allCards.every((c) => c.gigaChad === false)
}

export default verifyHasTrunfo