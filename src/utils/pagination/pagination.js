export const amountOfPages = (amount, objectsPerPage) => {
    if ((amount/objectsPerPage) % 1 != 0) {
        return Math.trunc((amount/objectsPerPage) + 1) 
    } else {
        return amount/objectsPerPage
    }
}
