import { createStore } from 'redux'

const store = createStore((state = {count: 0}) => {
    if (action.type === 'INCREMENT') {

    } else
    console.log('running')
    return state;
});

store.dispatch({
    type: 'INCREMENT'
});


console.log(store.getState());