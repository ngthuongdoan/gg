import { useState } from "react"
import GameSettingDrawer from "../GameSettingDrawer/GameSettingDrawer"
import { useStore } from "../../store"
import UserRow from "../UserRow/UserRow"

const GameContainer = () => {
  const play = useStore(state => state.play)

  const [opened, setOpened] = useState(false)
  return (
    <>
      {!play ?
        <div className="w-screen h-screen grid place-items-center">
          <button onClick={() => setOpened(true)} className="btn btn-xl btn-primary">Start</button>
        </div>
        : <div className="w-screen h-screen flex flex-col items-center gap-4 p-4">
          <UserRow user={{
            id: "1",
            name: "Player 1",
            avatar: "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Player+1",
            asset: 20000
          }} />
          <UserRow user={{
            id: "1",
            name: "Player 1",
            avatar: "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Player+1",
            asset: 20000
          }} />
          <UserRow user={{
            id: "1",
            name: "Player 1",
            avatar: "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Player+1",
            asset: 20000
          }} />
        </div>}
      <GameSettingDrawer opened={opened} onClose={() => setOpened(false)} />
    </>
  )
}

export default GameContainer