// src/layouts/DividerLayout.jsx
import React from 'react'

function DividerLayout({ leftComponent, rightComponent }) {
    return (
        <div className="flex flex-row w-full">
            <div className="flex-grow p-4">{leftComponent}</div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="flex-grow p-4">{rightComponent}</div>
        </div>
    )
}

export default DividerLayout