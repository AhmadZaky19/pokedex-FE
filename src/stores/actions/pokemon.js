import axios from "../../utils/axios";

export const getAllDataPokemon = (id, search) => {
  return {
    type: "GET_ALL_DATA_POKEMON",
    payload: axios.get(`pokemon/?id=${id}&search=${search}&page=1&limit=0`),
  };
};
