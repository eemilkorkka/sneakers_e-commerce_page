import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type CartContextType = {
  isCartEmpty: boolean;
  setCartEmpty: Dispatch<SetStateAction<boolean>>;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
}

export const CartContext = createContext<undefined | CartContextType>({
  isCartEmpty: true,
  setCartEmpty: () => {},
  amount: 0,
  setAmount: () => {},
  price: 125,
  setPrice: () => {}
})

interface CartContextProviderProps {
  children: ReactNode;
}

export default function CartContextProvider({ children }: CartContextProviderProps) {
  const [isCartEmpty, setCartEmpty] = useState<boolean>(true);
  const [amount, setAmount] = useState<number>(0);
  const [price, setPrice] = useState<number>(125);
  
  return (
    <CartContext.Provider value={{ isCartEmpty, setCartEmpty, amount, setAmount, price, setPrice }}>
      {children}
    </CartContext.Provider>
  )
}