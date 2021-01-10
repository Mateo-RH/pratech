import React, { useEffect, useState } from 'react';
import {FullProduct} from './FullProduct';

interface Product {
    id: string
    name: string
    quantity: number
}



export const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [productId, setProductId] = useState<string>()

    useEffect(() => {
        const sample:Product[] = [
            {id:"id1", name: "mango", quantity:4},
            {id:"id2", name: "pollo", quantity:1},
            {id:"id3", name: "honey", quantity:42},
        ]
        setProducts(sample)
    },[])


    const mapToRow = (product:Product) => {
        return(
            <tr key={product.id} onClick={()=>setProductId(product.id)}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
            </tr>
        )
    }

    const renderTable = () => {
        return(
            <table>
                <thead>
                    <tr>
                        {Object.keys(products[0]).map(attribute => <th>{attribute}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {products.map(mapToRow)}
                </tbody>
            </table>
        )
    }

    return (
        <div>
            {productId
                ? <FullProduct id={productId}/>
                : <React.Fragment>
                    <h1>Products Table</h1>
                        {products.length > 0 ? renderTable(): <p>No products</p>}
                    </React.Fragment>
            }
        </div>
    )
}