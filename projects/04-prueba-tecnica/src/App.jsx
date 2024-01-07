import { useEffect, useState } from 'react';
import './App.css'


const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactError] = useState()


  //Pensando que no se puede usar axios.
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if(!res.ok) setFactError('Error en la peticion')
        
        return res.json()
      })
      .then(data => {
        const {fact} = data
        setFact(fact)    
      })
  },[])

  useEffect(() =>{
    if(!fact) return
    
    const firstWord = fact.split(' ', 3).join(' ')
    setImageUrl(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white`)
  
  }, [fact])

  return (
    <main>
      <h1>App</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image from first word of ${fact}`} />}
    </main>
  );
}
