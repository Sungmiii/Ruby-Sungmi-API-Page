import React from 'react'

export default function Proverbs(props) {
  return (
    <div>
      <p>Maori Proverbs: {props.source}</p>
      <button onClick={props.showTheProverbs}>Translate</button>
      <button onClick={() => console.log(window.location.reload())}>Refresh</button>
    </div >

  )
}