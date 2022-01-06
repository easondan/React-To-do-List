import PropTypes from 'prop-types'

import React from 'react'

const Button = ({color,text,onClick}) => {

    return (
        <div>
            <button onClick={onClick} style = {{backgroundColor:color}} className='btn'>{text}</button>
        </div>
    )
}

export default Button

Button.defaultProps = {
    color:'steelblue',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onclick: PropTypes.func
}
 