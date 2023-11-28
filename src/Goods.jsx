import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Goods() {
    let goods = useSelector((state) => state.goodsArray);
    let dispatch = useDispatch();
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    let [price, setPrice] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setShowModal(true);
        setSelectedProduct(product);
    };

    const handleUpdate = () => {
        dispatch({ type: 'UPDATE', payload: selectedProduct });
        setShowModal(false);
    };




    return (
        <div className="App">

            <input type="text" onChange={(e) => setName(e.target.value)} />
            <input type="text" onChange={(e) => setDescription(e.target.value)} />
            <input type="number" onChange={(e) => setPrice(e.target.value)} />
            <button onClick={() => {
                const newProduct = {
                    product_name: name,
                    product_description: description,
                    product_price: price
                }

                dispatch({ type: 'ADD PRODUCT', payload: newProduct })
            }}>ADD</button>



            <ul>
                {goods.map((item) => {
                    return (
                        <li>
                            <p>Name: {item.product_name}</p>
                            <p>Description: {item.product_description}</p>
                            <p>Price: {item.product_price}</p>
                            <button onClick={() => {
                                dispatch({ type: 'DELETE', payload: item.product_name })
                            }}>DELETE</button>
                            <button onClick={() => openModal(item)}>UPDATE</button>
                        </li>
                    )
                })}
            </ul>



            {showModal && (
                <div className="modal">
                    
                        <h2>Update Product</h2>
                        <p>{selectedProduct?.product_name}</p>
                        <input
                            type="text"
                            value={selectedProduct?.product_description}
                            onChange={(e) => setSelectedProduct(prevState => ({ ...prevState, product_description: e.target.value }))}
                        />
                        <input
                            type="number"
                            value={selectedProduct?.product_price}
                            onChange={(e) => setSelectedProduct(prevState => ({ ...prevState, product_price: e.target.value }))}
                        />
                        <br/>
                        <br/>
                        <button onClick={handleUpdate}>Update</button>
                        <br/>
                        <br/>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    
                </div>
            )}

        </div>
    );
}


export default Goods;