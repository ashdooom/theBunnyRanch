import React from "react"

const Data = () => {
    const [buns, setBuns] = useState(
        {
            id: 0,
            bunName: 'Leon',
            bunPrice: 50,
            quantity: 1,
            image: leonBun

        },
        {
            id: 1,
            bunName: 'Bruiser',
            bunPrice: 50,
            quantity: 1,
            image: bruiserBun
        },
        {
            id: 2,
            bunName: 'Lana',
            bunPrice: 50,
            quantity: 1,
            image: lanaBun
        },
        {
            id: 3,
            bunName: 'Mona',
            bunPrice: 50,
            quantity: 1,
            image: brownieBun
        },
        {
            id: 4,
            bunName: 'Pepper',
            bunPrice: 50,
            quantity: 1,
            image: pepperBun
        },
        {
            id: 5,
            bunName: 'Peter',
            bunPrice: 50,
            quantity: 1,
            image: peterBun
        },
        {
            id: 6,
            bunName: 'Ashley and Ryan',
            bunPrice: 85,
            quantity: 1,
            image: pairedBuns
        }
    )
}

export default Data;