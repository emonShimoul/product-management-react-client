import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    // console.log(id);
    fetch(`http://localhost:5000/products/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
    return (
        <div>
            <h2>Update User</h2>
        </div>
    );
};

export default UpdateUser;