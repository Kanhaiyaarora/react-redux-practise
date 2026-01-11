import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const App = () => {

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setPokemon(res.data.results);
      setLoading(false);
    }
    fetchPokemon();
  }, [])

  if (loading) {
    return <h1 className='bg-green-400 h-screen w-screen flex justify-center items-center text-6xl'>Loading Pokemon...</h1>
  }

  return (

    <div className='text-4xl'>
      <h1 className='text-red-600'>Pokemon List</h1>
      {pokemon.map((p, index) => (
        <p key={index}>{p.name}</p>
      ))}
    </div>
  )
}

export default App
