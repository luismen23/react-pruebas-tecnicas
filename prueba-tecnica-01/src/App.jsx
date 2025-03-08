// Prueba técnica para Juniors y Trainees de React en Live Coding.
// APIs:

import { useEffect, useState, useTransition } from 'react'

// Facts Random: https://catfact.ninja/fact

// Imagen random: https://cataas.com/cat/says/hello

// Recupera un hecho aleatorio de gatos de la primera API

// Recuperar la primera palabra del hecho

// Muestra una imagen de un gato con la primera palabra.

const CAT_API_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_API_IMAGE = `https://cataas.com/cat/says/${firstWord}?json=true`

function App() {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()
  const [reload, setReload] = useState(false)

  useEffect(() => {
    // llamando a la api sin async await
    // fetch(CAT_API_RANDOM_FACT)
    //   .then(res => res.json())
    //   .then(data => {
    //     const { fact } = data
    //     setFact(fact)

    //     const firstWord = fact.split(' ')[0]

    //     fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
    //       .then(res => res.json())
    //       .then(data => {
    //         const { url } = data
    //         setImage(url)
    //       })
    //   })

    // llamando a la api con async await
    const fetchData = async () => {
      try {
        const data = await fetch(CAT_API_RANDOM_FACT)
        const json = await data.json()
        const { fact } = json
        setFact(fact)
        const firstWord = fact.split(' ')[0]

        const dataImage = await fetch(
          `https://cataas.com/cat/says/${firstWord}?json=true`
        )
        const jsonImage = await dataImage.json()
        const { url } = jsonImage
        setImage(url)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [reload])

  const handleClick = e => {
    e.preventDefault()
    setReload(!reload)
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
        <p>Cargando ...</p>
      )}
    </div>
  )
}

export default App
