import React from 'react'

function NameList() {
    const names = ['Shaggu', 'Shayi', 'Sony', 'Moin', 'React']
    const nameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>{nameList}</div>
    )
}

export default NameList