import { use, useEffect, useState } from 'react'
import './style.css'

const players = ['X', 'O']

const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(players[0])
  const [winner, setWinner] = useState(false)

  const handleClick = index => {
    const newBoard = [...board]
    if (newBoard[index] !== null) return

    if (turn === players[0]) {
      newBoard[index] = players[0]
      setTurn(players[1])
    } else {
      newBoard[index] = players[1]
      setTurn(players[0])
    }
    setBoard(newBoard)
  }

  useEffect(() => {
    const checkWinner = () => {
      combinations.forEach(combination => {
        if (
          board[combination[0]] === board[combination[1]] &&
          board[combination[1]] === board[combination[2]] &&
          board[combination[0]] !== null
        ) {
          console.log(`winner: ${board[combination[0]]}`)
          setWinner(true)
          console.log(winner)
        }
      })
    }

    checkWinner()
  }, [board])

  return (
    <div className='container'>
      <h1 className='title'>Tic Tac Toe</h1>

      <div className='board'>
        {board.map((cell, index) => {
          return (
            <div
              className='cell'
              key={index}
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
