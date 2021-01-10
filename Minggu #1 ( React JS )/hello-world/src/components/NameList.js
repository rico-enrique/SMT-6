import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Jane', 'Bob']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill : 'React'
        },
        {
            id: 2,
            name: 'Jane',
            age: 25,
            skill : 'Angular'
        },
        {
            id: 3,
            name: 'Bob',
            age: 28,
            skill : 'Vue'
        }
    ]

    
    const nameList = names.map((name, index) => <h2 key={index}>{ name }</h2>)
    return <div>{nameList}</div>
}

export default NameList
