import './InputSearch.scss';

function InputSearch({ value, handleChange }) {
  return (
    <div className='search'>
       <input
          type="search"
          className='search__input'
          placeholder="Search or start new chat"
          value={value}
          onChange={(event) => handleChange(event.target.value)}
        />
    </div>
  )
}

export default InputSearch;