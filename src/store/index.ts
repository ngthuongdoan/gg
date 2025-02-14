import { create } from 'zustand'
export type User = {
  id: string;
  name: string;
  asset: number;
  avatar: string;
}

export type StoreProps = {
  asset: number;
  setAsset: (newAsset:number) => void;
  playerList: User[];
  setPlayerList: (newPlayerList: User[]) => void;
  play: boolean;
  setPlay: (newPlay: boolean) => void;
}

export const useStore = create<StoreProps>((set) => ({
  asset: 0,
  setAsset: (newAsset:number) => set({ asset: newAsset }),
  playerList: [],
  setPlayerList: (newPlayerList: User[]) => set({ playerList: newPlayerList }),
  play: false,
  setPlay: (newPlay: boolean) => set({ play: newPlay }),
}))
