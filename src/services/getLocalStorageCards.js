const getLocalStorageCards = () => {
  const localStorageCards = localStorage.getItem('cards') 
    ? JSON.parse(localStorage.getItem('cards')) : []
  return localStorageCards
}

export default getLocalStorageCards