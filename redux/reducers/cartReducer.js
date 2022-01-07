let defaultState = {
    selectedItems: {items: [], magasinName: ""}
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART' : {
            let newState = {...state};
            if (action.payload.checkboxValue){
                console.log('ADD TO CART');
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    magasinName: action.payload.magasinName,
                };
            } else {
                console.log('REMOVE FROM CART');
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter((item) => item.title !== action.payload.title),
                    ],
                    magasinName: action.payload.magasinName,
                };
            }
            return newState;
        }

        default:
            return state;
    }
};

export default cartReducer;