import { useId, useState } from "react";
import NFCModal from "../NFCModal/NFCModal";
import { useStore } from "../../store";

const UserInput = () => {
  const [playerName, setPlayerName] = useState<string>("");
  const id = useId();
  const asset = useStore(state => state.asset)

  const assignNfc = () => {
    const modal = document.getElementById(id);
    if (modal) {
      (modal as HTMLDialogElement).showModal();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const [avatarImg, setAvatarImg] = useState<string>(`https://ui-avatars.com/api/?background=${Math.floor(Math.random() * 16777215).toString(16)}&color=fff&`)
  const handleOnBlur = () => {
    setAvatarImg(`https://ui-avatars.com/api/?background=${Math.floor(Math.random() * 16777215).toString(16)}&color=fff&name=${playerName}`)
  }

  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <div>
          <div className="avatar">
            <button onClick={assignNfc} className="h-24" disabled={!playerName || !asset}>
              <img
                src={avatarImg}
                alt="Avatar"
              />
            </button>
          </div>
        </div>
        <div className="join">
          <div className="w-full">
            <label className="input join-item">
              <input
                type="text"
                placeholder="Player name"
                required
                value={playerName}
                onChange={handleInputChange}
                onBlur={handleOnBlur}
              />
            </label>
          </div>
        </div>
      </div>
      <NFCModal playerName={playerName} id={id} avatar={avatarImg} />
    </>
  );
};

export default UserInput;