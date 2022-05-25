import { createContext } from "react";
import Post from "./Interfaces";

type WishListContexType = {
    wishListValue: Post[] | any,
    setWishListValue: (product: any) => void
}
const WishListContext = createContext<WishListContexType>({
    wishListValue: [],
    setWishListValue: () => []
})

export default WishListContext