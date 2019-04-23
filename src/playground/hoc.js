import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this is the info: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin &&  <p>This is private info. Please Don't Share it!</p>}
        <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

ReactDOM.render(<AdminInfo isAdmin={true} info="Secret!!!!!!#@#$@" />, document.getElementById('app'))