import React, { useContext } from 'react'
import { FullContext } from '../context/Context'

type Props = {
  children?: any
}

function Template({ children }: Props) {
  const appContext = useContext(FullContext)
  return (
    <div
      style={{
        background: appContext?.theme.bgFull,
        color:appContext?.theme.fgText,
      }}
      className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-blue-500/80"
    >
      {children}
    </div>
  )
}

export default Template
