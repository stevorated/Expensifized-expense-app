import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import moment from 'moment'



export const ExpenseListItem  = ({ id, desc, amount, createdAt }) => {
    if(!id) {
        return ( <p>No item</p> )
    }
    return (
        <div>
            <Link to={`/edit/${id}`}><h3>{desc}</h3></Link>
            <p>{amount/100} NIS - {moment(createdAt).format('LLL')}</p>
        </div>
    
    )
}


export default connect()(ExpenseListItem)