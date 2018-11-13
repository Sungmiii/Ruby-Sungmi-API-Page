import React from 'react'

export default function Proverbs(props) {
  return (
    <div>
      <p>Maori Proverbs: {props.source}</p>
      <p>Translation: {props.translation}</p>
    </div>

  )
}