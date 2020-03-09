import React, { useState } from 'react'

import {
    InputContainer,
    InputField,
} from './Styles/GroceryInput'

import { addGrocery } from '../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux'

const GroceryInput = () => {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();
    const groceryCount = useSelector(state => state.groceryCount);

    return (
        <InputContainer>
            <InputField placeholder="Add new item..." value={inputText} onChange={e => setInputText(e.target.value)} />
            <div
                style={{ width: "5%", paddingRight: 10, display: "flex", justifyContent: "center" }}
                onClick={() => {
                    if(inputText) {
                        dispatch(addGrocery(inputText, groceryCount));
                        setInputText("");
                    }
                }}
            >
                <i className="far fa-plus-square" style={{ color: "#ffc03a", fontSize: 20, marginTop: 15 }}></i>
            </div>
        </InputContainer>
    )
}

export default GroceryInput;