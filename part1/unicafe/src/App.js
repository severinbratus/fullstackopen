import { useState } from 'react'
import { produce } from 'immer'

const App = () => {
  // save clicks of each button to its own state
  const [stats, set_stats] = useState({good: 0, neutral: 0, bad: 0})

  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => set_stats(produce(stats, draft => {draft.good = draft.good + 1}))}/>
      <Button text="neutral" onClick={() => set_stats(produce(stats, draft => {draft.neutral = draft.neutral + 1}))}/>
      <Button text="bad" onClick={() => set_stats(produce(stats, draft => {draft.bad = draft.bad + 1}))}/>
      <h1>statistics</h1>
      <Statistics stats={stats}/>
    </>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Statistics = (props) => {
  /// ...
  const total = props.stats.bad + props.stats.neutral + props.stats.good
  return total > 0 ? (
    <table>
      <StatisticLine text="good" value ={props.stats.good} />
      <StatisticLine text="neutral" value ={props.stats.neutral} />
      <StatisticLine text="bad" value ={props.stats.bad} />
      <StatisticLine text="total" value ={total} />
      <StatisticLine text="average" value ={((props.stats.good - props.stats.bad) / total).toPrecision(2)} />
      <StatisticLine text="approval" value ={(100 * props.stats.good / total).toPrecision(2) + "%"} />
    </table>
  ) : (
    <p>
      No feedback given as of yet.
    </p>
  )
}

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

export default App
