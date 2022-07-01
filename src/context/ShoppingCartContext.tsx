import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";


type ShoppingCartProviderProps = {
    children: ReactNode
}
type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
   removeItem: (id: number) => void
   cartQuantity: number
   cartItems: CartItem[]
}
type CartItem = {
    id:number
    quantity: number
}
const shoppingCartContext = createContext({} as ShoppingCartContext)


export function UseShoppingCart(){
    return useContext(shoppingCartContext)
}


export function ShoppingCartProvider({children}:ShoppingCartProviderProps){
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[]);
    const [isOpen, setIsOpen] = useState(false);

  
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
    
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    function getItemQuantity(id:number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseQuantity(id:number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id ===id)== null){
                return [...currItems, { id, quantity:1}]
            }
            else{
                return currItems.map(item =>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }
                    else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseQuantity(id:number){
        setCartItems(currItems => {
            if(currItems.find(item => item.id ===id)?.quantity== 1){
                return  currItems.filter(item => item.id !== id)
            }
            else{
                return currItems.map(item =>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }
                    else{
                        return item
                    }
                })
            }
        })
    }

    function removeItem(id:number){
        setCartItems(currItems =>{
            return currItems.filter(item => item.id !== id)
        })
    }

    return <shoppingCartContext.Provider value = {{getItemQuantity, increaseQuantity, decreaseQuantity, removeItem, cartItems, cartQuantity, openCart, closeCart}}>
        {children}
        <ShoppingCart isOpen = {isOpen}/>
    </shoppingCartContext.Provider>
}