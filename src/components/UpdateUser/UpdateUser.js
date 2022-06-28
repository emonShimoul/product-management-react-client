import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [productInfo, setProductInfo] = useState({});
    // console.log(productInfo);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setProductInfo(data))
    }, []);

    const handleUpdate = e => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Updated Successfully!!');
            }
        })

        setProductInfo('');
        e.preventDefault();
    }

    const handleName = (e) =>{
        const updatedName = e.target.value;
        const updatedProduct = { name: updatedName, price: productInfo.price, quantity: productInfo.quantity };
        setProductInfo(updatedProduct);
    }

    const handlePrice = (e) =>{
        const updatedPrice = e.target.value;
        const updatedProduct = { name: productInfo.name, price: updatedPrice, quantity: productInfo.quantity };
        setProductInfo(updatedProduct);
    }

    const handleQuantity = (e) =>{
        const updatedQuantity = e.target.value;
        const updatedProduct = { name: productInfo.name, price: productInfo.price, quantity: updatedQuantity };
        setProductInfo(updatedProduct);
    }

    return (
        <div>
            <h2>Update Product {productInfo.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" value={productInfo.name || ""} onChange={handleName} />
                <input type="text" value={productInfo.price || ""} onChange={handlePrice} />
                <input type="number" value={productInfo.quantity || ""} onChange={handleQuantity} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;