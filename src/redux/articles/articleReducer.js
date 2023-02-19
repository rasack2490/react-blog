const INITIAL_STATE = {
    articles: []
}



function articleReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADDARTICLE':
            const newArr = [...state.articles];
            newArr.unshift(action.payload);
            return {
                articles: newArr
            }
        case 'LOADARTICLES':
            return {
                ...state,
                articles: action.payload
            }
        default:
            return state;
    }
}

export default articleReducer;


export const getArticles = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: 'LOADARTICLES',
            payload: data
        })
    })
}