import { useEffect, useState } from 'react';
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage';

export function App() {
  const [fact, setFact] = useState()
  const {imageUrl} = useCatImage({fact})


  //Pensando que no se puede usar axios.
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  },[])


  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App</h1>
      <button onClick={handleClick }>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image from first word of ${fact}`} />}
    </main>
  );
}
