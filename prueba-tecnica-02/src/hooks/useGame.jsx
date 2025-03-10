import { useState } from 'react'
import { useCheckWinner } from './useCheckWinner'

const players = ['X', 'O']

export const useGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(players[0])
  const { winner, setWinner, setWinnerPlayer, winnerPlayer } =
    useCheckWinner(board)

  const handleClick = index => {
    if (winner) return

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

  const handleReset = () => {
    setBoard(Array(9).fill(null))
    setTurn(players[0])
    setWinner(false)
    setWinnerPlayer(null)

    console.log(
      `winner: ${winner} -  winnerPlayer: ${winnerPlayer} - turn: ${turn}`
    )
  }

  return { board, turn, handleClick, handleReset }
}
