import "../styles/products.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function View({products,addToCart}) {
      
    return products.map(product => (
        (
        <div key={product.id} className="product">
            <img className="product-img" src={product.image}/>
            <div className="product-name">{product.name}</div>
            <div className="product-name">{product.price}</div>
            <div className="actions">
              <span className="action-btn" onClick={() => addToCart(product.id,product.name,product.price,product.image,product.created_date,product.cart_id,product.quantity)} >
                  <AddShoppingCartIcon/>
              </span>
          </div>
        </div>
        )
    ))
    }
    
    export default View;