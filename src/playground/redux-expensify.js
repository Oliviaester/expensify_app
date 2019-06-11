import {createStore, combineReducers} from 'redux';

const demoState = {
    expenses: [{
        id: 'lidnc',
        description: 'January Rent',
        note: 'This is the final payment for thar address',
        amount: 54500,
        createdAt: 0 
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};