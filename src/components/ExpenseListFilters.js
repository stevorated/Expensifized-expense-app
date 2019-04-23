import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
    state = {
        calanderFocused: null
    }

    onSelectFilter = (e)=>{
        if(e.target.value === 'date'){
            this.props.sortByDate()
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount()
        }
    }

    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value)
        console.log(e.target.value)
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calanderFocused) => {
        this.setState(()=> ({calanderFocused}))
    }

    render() {
        return (
            <div>
                <input 
                type="text"
                value={this.props.filters.text}
                onChange={this.onTextChange} 
                />
                <select 
                name="" 
                id="" 
                value={this.props.filters.sortBy}
                onChange={this.onSelectFilter}
                >
                
                <option value="date">Date</option>
                <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                startDateId="datePickerStart"
                endDateId="datePickerEnd"
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calanderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                showClearDates={true}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    sortByDate: ()=> dispatch(sortByDate()),
    sortByAmount: ()=> dispatch(sortByAmount()),
    setTextFilter: (text)=> dispatch(setTextFilter(text)),
    setStartDate: (date)=> dispatch(setStartDate(date)),
    setEndDate: (date)=> dispatch(setEndDate(date)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)