import { ChangeEvent } from "react"
import UserInput from "../UserInput/UserInput"
import { useStore } from "../../store"

type GameSettingProps = {
  opened: boolean
  onClose: () => void
}
const GameSettingDrawer = ({ opened, onClose }: GameSettingProps) => {
  const asset = useStore(state => state.asset)
  const setAsset = useStore(state => state.setAsset)
  const setPlay = useStore(state => state.setPlay)
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      onClose()
    }
  }
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" onChange={handleOnChange} checked={opened} />
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-full p-4 relative">
          <div className="flex flex-col gap-4 items-stretch">
            <label className="input w-full input-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-cash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" /></svg>
              <input type="number" className="tabular-nums" required placeholder="Start money" value={asset} onChange={(e) => setAsset(Number(e.target.value))} />
            </label>
            <div className="grid gap-4 grid-cols-2">
              <UserInput />
              <UserInput />
              <UserInput />
              <UserInput />
              <UserInput />
            </div>
          </div>
          <div className="flex flex-col gap-4 absolute bottom-4 left-4 right-4">
            <button className="btn btn-lg btn-secondary w-full" onClick={() => setPlay(true)}>Play</button>
            <button className="btn btn-lg btn-ghost w-full bg-white text-black" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameSettingDrawer