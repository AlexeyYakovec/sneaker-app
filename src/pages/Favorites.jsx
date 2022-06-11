import React from 'react';

function Favorites({ searchValue, onChangeSearchInput }) {
  return (
    <div className='content'>
      <div className='content-header flex'>
        <h2>
          {searchValue ? `Search by: '${searchValue} ' ` : 'All sneakers'}
        </h2>
        <input
          onChange={onChangeSearchInput}
          value={searchValue}
          placeholder='enter sneakers...'
          type='search'
        />
      </div>
      <div className='product-contenct'>Тут будут закладки</div>
    </div>
  );
}

export default Favorites;
