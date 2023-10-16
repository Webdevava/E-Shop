import React from 'react'
import '../styles/subnav.scss'

const SubNav = () => {
  return (
    <div className='subnav'>
    <div className="buttons">
    <button>Phones</button><button>Laptops</button><button>Tools</button>    
    </div>
    <form className="filter">
    <label htmlFor="sort"></label>
    <select name="sort" id="sort" className="filter-sort">
    <option value="lowest">Price(low-high)</option>
    <option value="highest">Price(high-low)</option>
    <option value="aTOz">Price(a-z)</option>
    <option value="zTOa">Price(z-a)</option>
    </select>
    </form>
    </div>
  )
}

export default SubNav
