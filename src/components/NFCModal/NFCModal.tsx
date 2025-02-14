import { useEffect } from "react";
import { NFCController } from "../../services/NFC";
type NFCModalProps = {
  playerName: string;
  id: string;
};
const NFCModal = ({ playerName, id }: NFCModalProps) => {
  useEffect(() => {
    (async () => {
      const nfc = new NFCController();
      await nfc.clear();
      await nfc.write(playerName);
      await nfc.scan();

    })()
  }, [playerName])
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <div className="grid place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-nfc"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 20a3 3 0 0 1 -3 -3v-11l5 5" /><path d="M13 4a3 3 0 0 1 3 3v11l-5 -5" /><path d="M4 4m0 3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3z" /></svg>
          <h3>Scanning...</h3>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}

export default NFCModal