import Data from './Data'
import Item from './Item'

interface Product {
    id: string,
    img: string,
    name: string
    price: string,
    quantity: number,
}

interface Props {
    addCart: (item: any) => void;
  }

export default function Product({addCart} : Props) {

    const storedProducts = localStorage.getItem('listProduct');
    const products: Product[] = storedProducts ? JSON.parse(storedProducts) : [];

    const renderProduct = () => {
        return products.map(product => (
            <Item 
                addCart={addCart}
                product={product}
            />
        ));
    }
  return (
    <div className='content'>  
        {renderProduct()} 
    </div>
  )
}
