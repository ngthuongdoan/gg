import { User } from "../../store"

type UserRowProps = {
  user: User
}
const UserRow = ({ user }: UserRowProps) => {
  return (
    <div className="rounded-xl border-2 border-gray-100 bg-white flex items-center w-full justify-stretch p-4 gap-4">
      <div className="block shrink-0">
        <img
          src={user.avatar}
          className="size-14 rounded-lg object-cover"
        />
      </div>

      <div className="grow">
        <h2 className="font-medium sm:text-lg">
          {user.name}
        </h2>
        <h5 className="font-bold text-green-500">
          {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
            user.asset,
          )}
        </h5>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-square bg-green-400 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>          </button>
        <button className="btn btn-circle bg-red-400 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /></svg>          </button>
      </div>
    </div>)
}

export default UserRow