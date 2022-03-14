import React from 'react'
import '../../globalStyles.scss'
import classes from './search.module.scss'
import { SearchSvgSelector } from './SearchSvgSelector'
import { CSVLink } from 'react-csv'

export const Search = () => {

  const headers = [
    { label: "name", key: "name" },
    { label: "id", key: "id" },
    { label: "class", key: "class" },
    { label: "score", key: "score" },
    { label: "speed", key: "speed" },
    { label: "parents", key: "parents" }
  ];

  const data = [
    { name: "Nicole Kidmann", id: "7512552212", class: "1C", score: 10, speed: 'Below Expected', parents: 'Antony Kidmann, Janelle Kidmann' },
    { name: "Nicole Kidmann", id: "7512552212", class: "1C", score: 10, speed: 'Below Expected', parents: 'Antony Kidmann, Janelle Kidmann' },
    { name: "Nicole Kidmann", id: "7512552212", class: "1C", score: 10, speed: 'Below Expected', parents: 'Antony Kidmann, Janelle Kidmann' },
    { name: "Nicole Kidmann", id: "7512552212", class: "1C", score: 10, speed: 'Below Expected', parents: 'Antony Kidmann, Janelle Kidmann' },
    { name: "Nicole Kidmann", id: "7512552212", class: "1C", score: 10, speed: 'Below Expected', parents: 'Antony Kidmann, Janelle Kidmann' },
    { name: "Nicole Kidmann", id: "7512552212", class: "1C", score: 10, speed: 'Below Expected', parents: 'Antony Kidmann, Janelle Kidmann' }
  ];


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
            <CSVLink className={classes.exportCSV} data={data} headers={headers}>
              export csv
            </CSVLink>

          </div>
        </div>

      </div>
    </div>
  )
}
