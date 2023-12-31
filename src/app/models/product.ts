// export interface Product {
//     id:number;
//     title:string;
//     price: string;
//     description:string;
//     image:string;
//     count:number;
// }


export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    count?: number;
    userId?: number;
  }
