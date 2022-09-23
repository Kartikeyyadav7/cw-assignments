import React, { useState, useEffect, useRef } from 'react'
import { getProducts } from '../redux/action/productAction'
import { connect } from "react-redux";
import Card from './Card';
import "../Styles/CardView.css"


const TOTAL_PAGES = 2;

function CardView({ getProducts, product: { products, loading } }) {
    const [pageNum, setPageNum] = useState(1);
    const [lastElement, setLastElement] = useState(null);
    console.log(products)
    const observer = useRef(
        new IntersectionObserver((entries) => {
            const first = entries[0];
            if (first.isIntersecting) {
                setPageNum((no) => no + 1);
            }
        })
    )

    useEffect(() => {
        getProducts(pageNum);
    }, [pageNum]);

    useEffect(() => {
        const currentElement = lastElement;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [lastElement]);

    return (
        <div >
            <div className='cards'>
                {products.length > 0 &&
                    products.map((card, i) => {
                        return i + 1 === products.length &&
                            !loading &&
                            pageNum <= TOTAL_PAGES ? (
                            <div
                                key={`${card.first_name}-${i}`}
                                ref={setLastElement}
                            >
                                <Card cardImg={card.avatar} email={card.email} firstName={card.first_name} lastName={card.last_name} />
                            </div>
                        ) : (
                            <Card key={`${card.first_name}-${i}`} cardImg={card.avatar} email={card.email} firstName={card.first_name} lastName={card.last_name} />

                        );
                    })}
            </div>
            {loading && <p >loading...</p>}
        </div>
    )
}


const mapStateToProps = (state) => ({
    product: state.product,
});

export default connect(mapStateToProps, { getProducts })(
    CardView
);
