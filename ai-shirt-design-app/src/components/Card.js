import React from 'react';

const Card = ({item , addToCart}) => {
    const {id,title,price,author,img} = item
    return (
        <div className='cards'>
            <div className='image_box'><img src={img}/></div>
            <div className='details'>
                <p>{title}</p>
                <p>{author}</p>
                <p>{price}</p>
                <button onClick={() => addToCart(item)}>Add to cart</button>
            </div>
        </div>
    )
}

export default Card