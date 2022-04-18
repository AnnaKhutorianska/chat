import React from 'react';

import './InputSearch.scss';

function InputSearch() {
  return (
    <div className='search'>
       <input type="search" className='search__input' placeholder="Search or start new chat"/>
    </div>
  )
}

export default InputSearch;