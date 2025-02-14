import { useState } from "react"
import GameSettingDrawer from "../GameSettingDrawer/GameSettingDrawer"

const GameContainer = () => {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <div className="w-screen h-screen grid place-items-center">
        <button onClick={() => setOpened(true)} className="btn btn-xl btn-primary">Start</button>
      </div>
      <GameSettingDrawer opened={opened} onClose={() => setOpened(false)} />
    </>
  )
}

export default GameContainer