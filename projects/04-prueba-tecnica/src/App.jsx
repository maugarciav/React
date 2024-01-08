import './App.css'
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';


export function App() {
  const {fact ,  refreshFact} = useCatFact()
  const {imageUrl} = useCatImage({fact})

  const handleClick = async () => {
    refreshFact()
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
