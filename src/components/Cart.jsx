import './cart.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Cart = ({ cart, setCart }) => {

    const removeCart = (item) => {
        console.log("Item to remove:", item);
        const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
        console.log("Updated cart state:", updatedCart);
        setCart(updatedCart);
    };

    return (
        <>
            <h1>Cart Products</h1>
            <div className="cart-container">
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className="cart-products">
                            <div className="image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="cart-product-details">
                                <h3>Product Name: {item.title}</h3>
                                <p>Price: {item.price} $</p>
                                <button className="removeCart" onClick={() => removeCart(item)}>
                                    Remove From Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products in the cart.</p>
                )}
            </div>
            <h1>
                Total Amount: $
                {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </h1>
        </>
    );
};

export default Cart;