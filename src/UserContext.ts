import { createContext } from "react";

type UserContextType = {
    user: string | any,
    setUser: (user: any) => void
}

const UserContext = createContext<UserContextType>({
    user:  '',
    setUser: () => {}
})

export default UserContext