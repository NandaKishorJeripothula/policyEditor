import React from 'react'
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

function Appoloboost() {
    return (
        <div>
             <Query
                query={gql`
                {
                    rates(currency: "INR") {
                    currency
                    rate
                    }
                }
                `}
            >
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return data.rates.map(({ currency, rate }) => (
                        <div key={currency}>
                        <p>{currency}: {rate}</p>
                        </div>
                    ));
                }}
            </Query>
        </div>
    )
}

export default Appoloboost
