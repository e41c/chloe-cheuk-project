// src/layouts/DividerLayout.jsx
import React from 'react'

function DividerLayout({ leftComponent, rightComponent }) {
    return (
        <div className="flex flex-col md:flex-row w-full">
            {/* Use w-2/5 to take up 40% of the width for the details */}
            <div className="w-full md:w-2/5 p-4">{leftComponent}</div>
            <div className="divider md:divider-horizontal"></div>
            {/* Use w-3/5 to take up 60% of the width for the carousel */}
            <div className="w-full md:w-3/5 flex-grow p-4">{rightComponent}</div>
        </div>
    )
}

export default DividerLayout
