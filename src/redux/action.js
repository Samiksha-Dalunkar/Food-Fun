export const addItem = (menu) => {
    return {
        type : "ADDITEM",
        payload : menu
    }
}

export const delItem = (menu) => {
    return {
        type : "DELITEM",
        payload : menu
    }
}