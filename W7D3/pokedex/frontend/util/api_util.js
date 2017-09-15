const APIUtil = {
  getAllPokemon: () => (
    $.ajax({
      url: 'api/pokemon',
      method: 'GET'
    })
  ),

  getPoke: (pokeId) => (
    $.ajax({
      url: `api/pokemon/${pokeId}`,
      method: 'GET'
    })
  ),

  getItems: (pokeId) => (
    $.ajax({
      url: `api/pokemon/${pokeId}/items`,
      method: 'GET'
    })
  )

};




export default APIUtil;
