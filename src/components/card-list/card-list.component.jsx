import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';


/*
* This is our card component
* Components take in "props" which is the parameter that we get
* from our functional component
* */

export const CardList = props => {
    console.log('THESE ARE THE PROPS: ', props);
    return <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>
}