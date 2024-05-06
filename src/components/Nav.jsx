import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="navbar bg-base-100">
  {/* <div className="flex-1"> */} 
    <Link to="/" className="btn btn-ghost normal-case text-xl">Chloe Cheuk</Link>
  {/* </div> */}
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/statementpage">Statement</Link></li>
      <li><Link to="/workpage">Work</Link></li>
      <li><a>Bio</a></li>
      <li><a>CV</a></li>
      <li><a>Press</a></li>
      <li>
        <details>
          <summary>
            Social
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}
