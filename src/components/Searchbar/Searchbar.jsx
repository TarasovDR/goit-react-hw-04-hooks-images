import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';

export default function Searchbar({onSubmit}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === ""){
      toast.warn('no request - no picture=)', {
        position: "top-right",
        autoClose: 3000,
        });
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  }

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  return(
    <SearchHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>
          Search
          </SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput 
          autocomplete="off"
          autoFocus
          onChange={handleChange}
          placeholder="Search images and photos"
          type="text"
          value={searchQuery}
        />
      </SearchForm>
    </SearchHeader>
  )
}


  
