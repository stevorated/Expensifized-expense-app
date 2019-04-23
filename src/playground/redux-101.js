import { createStore } from 'redux'

const incrementCount = ({ by = 1 } = {})=>({
    type: 'INCREMENT',
    by
})

const decrementCount = ({ by = 1 } = {})=>({
    type: 'DECREMENT',
    by
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
})

const store = createStore((state = {count:0}, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + action.by}
        case 'DECREMENT':
            return {count: state.count - action.by}
        case 'RESET':
            return {count: 0}
        case 'SET':
            return {count: action.count}
        default:
            return state
    }
})

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount({by:30}))

store.dispatch(incrementCount())

store.dispatch(decrementCount({by:555}))

store.dispatch(resetCount())

store.dispatch(setCount({count: 4}))






