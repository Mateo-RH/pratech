import React, { useState, useEffect } from 'react';

interface Props {
    id: string
}

interface Product {
    id: string
    name: string
    description: string
    expiration: Date
    quantity: number
    tags: string[]
    type: "meat" | "fruit" | "vegetal"
    avaible: Boolean
}


export const FullProduct: React.FC<Props> = ({id}) => {
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        const sample:Product = {
            id,
            name: "mago",
            description: "delicious",
            expiration: new Date(),
            quantity: 1,
            tags: ["healty", "gluten free"],
            type: "fruit",
            avaible: true

        }
        setProduct(sample)
    },[])

    return (
        <div>
            <h1>FullProduct: {id}</h1>
        </div>
    )
}