import React from 'react'
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io"
});

function Appolo() {

    client
        .query({
            query: gql`
                {
                    rates(currency: "USD") {
                    currency
                    }
                }
            `
        })
        .then(result => {
           console.log(JSON.stringify(result)) 
        });
    return (
        <div>
            appolo
        </div>
    )
}

export default Appolo
