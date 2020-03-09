import React from 'react'

import SectionTitle from '../Components/SectionTitle'
import GroceryInput from '../Components/GroceryInput'
import GroceryItem from '../Components/GroceryItem'

import {
    ListContainer,
} from './Styles/General'

import { useSelector } from 'react-redux'

const GroceryListConteiner = () => {
    const groceryCount = useSelector(state => state.groceryCount);
    const groceries = useSelector(state => state.groceries);

    return (
        <ListContainer>
            <div style={{ marginBottom: 30 }}>
                <SectionTitle color="#fafafa" alignment="center" >Grocery Shopping List</SectionTitle>
                <SectionTitle color="#ffc03a" size="12px" alignment="center" >{groceryCount} ITEMS</SectionTitle>
            </div>
            <GroceryInput />
            <div style={{ marginTop: 30 }}>
                {groceries.map(groceryItem => <GroceryItem key={groceryItem.index} item={groceryItem.item} index={groceryItem.index} />)}
            </div>
            
        </ListContainer>
    )
}

export default GroceryListConteiner;