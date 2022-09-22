import React, { useEffect } from 'react'
import { getProducts } from '../redux/action/productAction'
import { connect } from "react-redux";
import Card from './Card';
import "../Styles/CardView.css"

function CardView({ getProducts, product: { products, loading } }) {
    useEffect(() => {
        getProducts();
    }, [getProducts]);

    let cards;
    if (products === null || loading) {
        cards = <div>Loading...</div>;
    } else {
        console.log(products);
        cards = products.map((card) => <Card key={card.id} cardImg={card.avatar} email={card.email} firstName={card.first_name} lastName={card.last_name} />)
    }
    return (
        <div className='cards'>{cards}</div>
    )
}


const mapStateToProps = (state) => ({
    product: state.product,
});

export default connect(mapStateToProps, { getProducts })(
    CardView
);
