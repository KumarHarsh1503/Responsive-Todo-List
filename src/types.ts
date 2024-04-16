export interface Product {
  id: string;
  price: string;
  name: string;
  pdesc: string;
  img: string;
  seller: string;
  quantity: string;
  user:string;
}

export interface OrderReturn {
  id: string;
  sellerId: string;
  orderId: string;
  returnReason: string;
}

export interface Orders {
  id: string;
  cvv: string;
  items: string;
  userId: string;
  sellerId: string;
  status: string;
  userName: string;
  price: string;
}

export interface Seller {
  email: string;
  name: string;
  address: string;
  password: string;
}

export interface User {
  userEmail: string;
  userName: string;
  userPassword:string;
  userAddress:string;
  userPhoneNumber:string;
}

export interface test{
  descp:string;
  name:string;
  price:string;
  seller:string;
  user:string;
}
