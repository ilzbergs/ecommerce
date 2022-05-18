import { createContext } from "react";

type UserContextType = {
    user: string | null,
    setUser: (user: string) => void
}

const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {}
})

export default UserContext