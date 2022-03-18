import React, { useState } from 'react'
import Filter from '../Filter';
import Header from '../Header';
import Search from '../Search';
import Spreadsheet from '../Spreadsheet';

export function App() {
  const [value, setValue] = useState('')


  const changeInput = (event) => {
    setValue(event.target.value)
  }


  return (
    <>
      <Header />
      <Filter />
      <Search changeInput={changeInput} />
      <Spreadsheet itemsPerPage={4} value={value}/>
    </>
  );
}

