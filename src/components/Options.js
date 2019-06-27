import React from 'react'

const Options = ({options, taskIndex, toggleOption}) => {
    if (options === undefined) {
        return null
    }
    const items = [...options].map((item, index) =>
        <li key={index}>
            <input type="checkbox"
                   checked={item.checked}
                   onChange={() => toggleOption({taskIndex, optionIndex: index})}
            />
            {item.text}
        </li>
    )

    return(
        <ul>{items}</ul>
    )
}

export default Options