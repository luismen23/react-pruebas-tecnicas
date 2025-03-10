import { useGame } from './hooks/useGame'
import { useCheckWinner } from './hooks/useCheckWinner'
import './style.css'

const players = ['X', 'O']

function App() {
  const { board, turn, handleClick, handleReset } = useGame()
  const { winner, winnerPlayer } = useCheckWinner(board)

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

      <p>
        Turn: <span className='turn'>{turn}</span>
      </p>

      {winner && winnerPlayer ? (
        <span className='winnerPlayer'>"{winnerPlayer}" player wins!</span>
      ) : (
        <span></span>
      )}

      <button className='resetButton' onClick={() => handleReset()}>
        Reset
      </button>
    </div>
  )
}

export default App
