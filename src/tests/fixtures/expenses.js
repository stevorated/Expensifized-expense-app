import moment from 'moment'

export default [{
    id: 1,
    desc: 'testing 111',
    amount: 666,
    note: '',
    createdAt: 0 
} , {
    id: 2,
    desc: 'testing 122',
    amount: 166,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: 3,
    desc: 'testing 222',
    amount: 1000,
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf()
}
]