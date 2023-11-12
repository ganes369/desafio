export interface Products {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductsCard = Omit<Products | "createdAt", "updatedAt", "brand">;
