import React from 'react'
import CardPair from './CardPair'
import flowers from '../assets/flowers.json'

export default function GridCard({ numCards }: { numCards: number }) {
    const cardsArr = []

    for (let i = 0; i < numCards; i++) {
        cardsArr.push(flowers[i % (flowers.length - 1)])
    }

    return (
        <>
            <div className="grid grid-cols-5 gap-10 p-10">
                {cardsArr.map((el) => {
                    return <CardPair value={el} />
                })}
            </div>
        </>
    )
}