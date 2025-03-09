// Prueba técnica para Juniors y Trainees de React en Live Coding.
// APIs:

import { useEffect, useState, useTransition } from 'react'
import { getRandomFact, getRandomImage } from './services/facts'

// Facts Random: https://catfact.ninja/fact

// Imagen random: https://cataas.com/cat/says/hello

// Recupera un hecho aleatorio de gatos de la primera API

// Recuperar la primera palabra del hecho

// Muestra una imagen de un gato con la primera palabra.

// const CAT_API_IMAGE = `https://cataas.com/cat/says/${firstWord}?json=true`

// custom hook
function useCatImage({ fact }) {
  const [image, setImage] = useState()

  useEffect(() => {
    // .then() para que se ejecute la función asincrona y se setee el valor de la imagen
    getRandomImage(fact).then(newImage => setImage(newImage))
  }, [fact])

  return { image }
}

function App() {
  const [fact, setFact] = useState()
  const { image } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async e => {
    e.preventDefault()
    const newFact = await getRandomFact(fact)
    setFact(newFact)
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1>Prueba Tecnica de React de Live Coding</h1>

      <button onClick={handleClick}>
        <a href='/'>Get a random fact:</a>
      </button>
      {fact && (
        <p style={{ textDecoration: 'underline', color: 'gray' }}>{fact}</p>
      )}

      <h3>Random Cat Image with the first word of the fact</h3>
      {image ? (
        <img
          src={image}
          alt='imagen de gato con primera palabra del fact'
          style={{
            width: '30rem',
            height: '20rem',
            objectFit: 'contain',
          }}
        />
      ) : (
        <span>Cargando ...</span>
      )}
    </div>
  )
}

export default App
