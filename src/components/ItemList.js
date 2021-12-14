import Link from 'next/link'
import React from 'react'

function ItemList({list}) {
    return (
        <div class="ui three column divided grid">
            <div class="row">
                <div class="column">
                    {
                        list.map((item) => (
                            <Link href={`/view/${item.id}`}>
                                <img src={item.image_link} alt={item.name}/>
                            </Link>
                        ))
                    }
                </div>
                <div class="column">
                    {list.map((item) => (<img src={item.image_link} alt={item.name}/>))}
                </div>
                <div class="column">
                    {list.map((item) => (<img src={item.image_link} alt={item.name}/>))}
                </div>

            </div>
        </div>

    )
}

export default ItemList
