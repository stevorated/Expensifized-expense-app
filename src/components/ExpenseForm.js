import React from 'react'

import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'


export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            desc: props.expense ? props.expense.desc : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            // calanderFocused: false,
            error: ''
    
        }
    }

    onDescriptionChange = (e) => {
        const desc = e.target.value
        this.setState(()=> ({
            desc
        }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }))
        }
        
    }
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(()=>({createdAt}))
        }
    }

    // onFocusChange = (calanderFocused) => {
    //     this.setState(()=> ({calanderFocused}))
    // }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(()=> ({
            note
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.desc || !this.state.amount) {
            const error = 'Please provide description and amount to save.'
            this.setState(()=>({
                error
            })  )
        } else {
            this.setState(()=> ({
                error: ''
            }))
            this.props.onSubmit({
                desc: this.state.desc,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.desc}
                    onChange={this.onDescriptionChange}
                    />
                    <input 
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                    onDateChange={createdAt => this.setState({ createdAt })} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    id="your_unique_id" // PropTypes.string.isRequired
                    numberOfMonths={1}
                    isOutsideRange={(day)=> false}
                    />
                    <textarea 
                    placeholder="notes for your expense (optional)"
                    rows="3"
                    cols="100"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    ></textarea>

                    <button>
                    Add
                    </button>
                </form>
            </div>

        )
    }
}