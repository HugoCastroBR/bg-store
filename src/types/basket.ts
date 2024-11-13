export type BasketItemModifier = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type BasketItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  modifiers?: BasketItemModifier[];
  totalPrice: number; 
};

export type Basket = {
  items: BasketItem[];
  totalItems: number; 
  totalPrice: number; 
};
