import * as BreadApiUtil from '../util/bread_util';

export const RECEIVE_ALL_BREADS = 'RECEIVE_ALL_BREADS';
export const RECEIVE_A_BREAD = 'RECEIVE_A_BREAD';
export const RECEIVE_SUGGESTED_BREADS = 'RECEIVE_SUGGESTED_BREADS';

export const receiveBreads = breads => ({
    type: RECEIVE_ALL_BREADS,
    breads
})

export const receiveBread = bread => ({
    type: RECEIVE_A_BREAD,
    bread
})

export const receiveSuggestedBread = breads => ({
    type: RECEIVE_SUGGESTED_BREADS,
    breads
})

export const fetchAllBreads = () => dispatch => (
    BreadApiUtil.fetchBreads()
        .then(breads => dispatch(receiveBreads(breads)))
        .catch(err => console.log(err))
)

export const fetchABread = (breadId) => dispatch => (
    BreadApiUtil.fetchBread(breadId)
        .then(bread => dispatch(receiveBread(bread)))
        .catch(err => console.log(err))
)

export const fetchSuggestBreads = breadData => dispatch => {
    // debugger
    return BreadApiUtil.fetchSuggestedBreads(breadData)
        .then(breads => {
            // debugger
            dispatch(receiveSuggestedBread(breads))})
        .catch(err => {
            // debugger
            console.log(err)})
}