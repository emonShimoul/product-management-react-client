import React, { useRef, useState } from 'react';

const AddProduct = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    const [productInfo, setproductInfo] = useState({});
    const handleSubmit = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const productsDetails = {name: name, price: price, quantity: quantity}
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsDetails)
        })
        .then(res => res.json())
        .then(data => {
            setproductInfo(data);
            if(productInfo.acknowledged !== "false"){
                alert("Product Inserted Successfully!!");
            }
            else{
                alert("Product not inserted...");
            }
        });


        nameRef.current.value = "";
        priceRef.current.value="";
        quantityRef.current.value="";
        e.preventDefault();
    }

    return ( 
        <div>
            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} placeholder='Name' />
                <input type="text" ref={priceRef} placeholder='Price' />
                <input type="number" ref={quantityRef} placeholder='Quantity' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;