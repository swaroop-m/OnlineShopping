import axios from 'axios'
import React, { useState, useEffect } from 'react'

function CreateProduct() {

    let [product, setProduct] = useState({ productName: '', dimension: '', specification: '', manufacturer: '', quantity: 0, price: 0.0 })
    let [submit, setSubmit] = useState({ productName: '', dimension: '', specification: '', manufacturer: '', quantity: 0, price: 0.0 })

    function handleSubmit() {
        setSubmit(product)
    }

    useEffect(() => {
        setProduct(product)
        axios.post('http://localhost:9000/api/saveproduct', product)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }, [submit])

    return (
        <div className="text-white" >
        <h4>Add Product</h4>
            <div className="row card col-5 border border-dark bg-dark text-white">

            <form onSubmit={handleSubmit}>
                {/* <div className='form-group'>
                    <label>Employee ID</label>
                    <input onChange={e => setEmployee({ ...employee, eid: e.target.value })} value={employee.eid} className='form-control' />
                </div> */}

                <div className="form-group">
                    <label>Product Name </label>
                    <input onChange={p => setProduct({ ...product, productName: p.target.value })} value={product.productName} className='form-control bg-dark' />
                </div>

                <div className='form-group'>
                    <label>dimension</label>
                    <input onChange={p => setProduct({ ...product, dimension: p.target.value })} value={product.dimension} className='form-control bg-dark' />
                </div>

                <div className='form-group'>
                    <label>specification</label>
                    <input onChange={p => setProduct({ ...product, specification: p.target.value })} value={product.specification} className='form-control bg-dark' />
                </div>

                {/* <div className='form-group'>
                    <label>Product Name Name</label>
                    <input onChange={p => setProduct({ ...product, productName: p.target.value })} value={product.productName} className='form-control' />
                </div> */}

                <div className='form-group'>
                    <label>manufacturer</label>
                    <input onChange={p => setProduct({ ...product, manufacturer: p.target.value })} value={product.manufacturer} className='form-control bg-dark' />
                </div>

                <div className='form-group'>
                    <label>quantity</label>
                    <input onChange={p => setProduct({ ...product, quantity: p.target.value })} value={product.quantity} className='form-control bg-dark' />
                </div>

                <div className='form-group'>
                    <label>price</label>
                    <input onChange={p => setProduct({ ...product, price: p.target.value })} value={product.price} className='form-control bg-dark' />
                </div>

                {/* <div className='form-group'>
                    <label>Employee City</label>
                    <select onChange={e => setEmployee({ ...employee, ecity: e.target.value })} value={employee.ecity} className='form-control'>
                        <option value=''>--Select City--</option>
                        <option value='Hyderabad'>Hyderabad</option>
                        <option value='Vijayawada'>Vijayawada</option>
                    </select>
                </div> */}
                <button className='btn btn-primary m-3'>Add Product
                
                </button>
            </form>
            </div>
        </div>
    )

}

export default CreateProduct