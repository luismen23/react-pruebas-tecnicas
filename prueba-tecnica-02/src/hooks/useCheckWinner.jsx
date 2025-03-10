import { useEffect, useState } from 'react'

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

export const useCheckWinner = board => {
  const [winner, setWinner] = useState(false)
  const [winnerPlayer, setWinnerPlayer] = useState(null)

  useEffect(() => {
    const checkWinner = () => {
      combinations.forEach(combination => {
        if (
          board[combination[0]] === board[combination[1]] &&
          board[combination[1]] === board[combination[2]] &&
          board[combination[0]] !== null
        ) {
          setWinner(true)
          setWinnerPlayer(board[combination[0]])
          console.log(winnerPlayer)
        }
      })
    }

    checkWinner()
  }, [board])

  return { winner, setWinner, winnerPlayer, setWinnerPlayer }
}
