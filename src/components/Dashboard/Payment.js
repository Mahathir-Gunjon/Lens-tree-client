import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Header/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51L3hcuF3jVDxKyohZB74tmKZTOUbv32XDw7Dha5dAUk69BYr0zQzPsT3Wq66zp7NPgCo9feNgtqc4msrLEbDfmos00onbNvIWK');

const Payment = () => {
    const { id } = useParams();
    const url = `https://afternoon-eyrie-82354.herokuapp.com/order/${id}`;

    const { data: product, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {product.buyerName}</p>
                    <h2 className="card-title">Please Pay for {product.orderName}</h2>
                    <p>Please pay: ${product.quantity}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;