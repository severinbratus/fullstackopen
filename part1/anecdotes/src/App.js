import { useState } from 'react'
import { produce } from 'immer'
import { maxBy } from 'lodash'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.from({length: anecdotes.length}).map(_ => 0))

  const top = maxBy(Array.from({length: votes.length}).map((_, index) => index), index => votes[index])

  return (
    <div>
      <h1>Random anecdote</h1>
      <Anecdote text={anecdotes[selected]} votes={votes[selected] == 0 ? "no" : votes[selected]}/>
      <button onClick={() => setVotes(produce(votes, draft => {draft[selected]++}))}>vote!</button>
      <button onClick={() => setSelected(getRandomSelected(anecdotes))}>get another anecdote?</button>
      <h1>Top anecdote</h1>
      <Anecdote text={anecdotes[top]} votes={votes[top]}/>
    </div>
  )
}

const Anecdote = (props) => (
  <>
    <p>
      {props.text}
    </p>
    <p>
      has {props.votes} votes.
    </p>
  </>
)

const getRandomSelected = (anecdotes) => {
  console.log(anecdotes[Math.trunc(Math.random() * anecdotes.length)])
  return Math.trunc(Math.random() * anecdotes.length)
}

export default App
