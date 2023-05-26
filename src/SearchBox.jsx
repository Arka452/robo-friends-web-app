// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const SearchBox =({searchChange})=>{
    return(
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue br4 tc' type="search" placeholder='search for robots' onChange={searchChange}/>
        </div>
        
    )
}
export default SearchBox;