import React, { useState } from 'react'

import {
    ItemContainer,
    ItemTextContainer,
    ItemText,
} from './Styles/GroceryItem'

import {
    InputContainer,
    InputField,
} from './Styles/GroceryInput'

import { removeGrocery, editGrocery } from '../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux'

const GroceryItem = (props) => {
    const dispatch = useDispatch();
    const groceries = useSelector(state => state.groceries);

    const [inputText, setInputText] = useState("");
    const [disabled, setDisabled] = useState(true);

    return (
        <React.Fragment>
            <ItemContainer>
                <div
                    style={{ width: "5%", paddingLeft: 10, display: "flex", justifyContent: "center" }}
                    onClick={() => {
                        setDisabled(false);
                    }}
                >
                    <i className="fas fa-pencil-alt" style={{ color: "#fafafa", fontSize: 20, marginTop: 15 }}></i>
                </div>
                <ItemTextContainer>
                    <ItemText>
                        {props.item}
                    </ItemText>
                </ItemTextContainer>
                <div
                    style={{ width: "5%", paddingRight: 10, display: "flex", justifyContent: "center" }}
                    onClick={() => {
                        dispatch(removeGrocery(props.index));
                    }}
                >
                    <i className="far fa-trash-alt" style={{ color: "red", fontSize: 20, marginTop: 15 }}></i>
                </div>
            </ItemContainer>

            <InputContainer edit disabled={disabled} >
                <InputField placeholder="Edit this item..." value={inputText} onChange={e => setInputText(e.target.value)} />
                <div
                    style={{ width: "5%", paddingRight: 10, display: "flex", justifyContent: "center" }}
                    onClick={() => {
                        if (inputText) {
                            dispatch(editGrocery(inputText, groceries[props.index].index));
                            setInputText("");
                            setDisabled(true);
                        }
                    }}
                >
                    <i className="far fa-check-circle" style={{ color: "#2afa4d", fontSize: 20, marginTop: 15 }}></i>
                </div>
            </InputContainer>
        </React.Fragment>
    )
}

export default GroceryItem;