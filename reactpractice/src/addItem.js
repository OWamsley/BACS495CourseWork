import React from 'react';

function AddItem(props){
    return(
        <button className="addItem" onClick={props.onClick}>
            Add Item
        </button>
    );
}

export default AddItem;