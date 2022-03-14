import React from 'react'
import '../../globalStyles.scss'
import classes from './search.module.scss'
import { SearchSvgSelector } from './SearchSvgSelector'

export const Search = () => {
  return (
    <div className={classes.search}>
      <div className='root_container'>

        <div className={classes.search_wrapper}>
          <div className={classes.searchTitle}>
            <h1>Students</h1>
          </div>

          <form className={classes.search_form}>
            <input type='text' placeholder='Enter Student Name, Parent or ID here' />
          </form>

          <div className={classes.exportCSV}>
            <SearchSvgSelector id='exportCVS' />
            <p>Export CSV</p>
          </div>
        </div>

      </div>
    </div>
  )
}
