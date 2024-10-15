//useState hook with Array

import React, { useState } from 'react'

const StateArray = () => {
  const [items, setIntems] = useState()
  return (
    <div>
      <ol>
        {items.map((item) => (
          <li>{items.value}</li>
        ))}
      </ol>
    </div>
  )
}

export default StateArray
