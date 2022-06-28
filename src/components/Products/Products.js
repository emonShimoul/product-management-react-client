import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Products = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    } ,[]);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure, you want to delete??");
        if(proceed){
            fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    // console.log(data);
                    alert("Deleted Successfully!!");
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }
            });
        }
    } 

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {
                    products.map(product => <li key={product._id}>
                        {product.name} - {product.price} - {product.quantity} {" "} 
                        <button onClick={() => handleDelete(product._id)}>X</button> {" "} 
                        <Link to={`/updateuser/${product._id}`}><button>Update</button></Link>
                        </li> )
                }
            </ul>
        </div>
    );
};

export default Products;