import React from 'react'
import '../../globalStyles.scss'
import classes from './search.module.scss'
import { SearchSvgSelector } from './SearchSvgSelector'
import { CSVLink } from 'react-csv'

export const Search = ({ changeInput }) => {

  const headers = [
    { label: "name", key: "name" },
    { label: "id", key: "id" },
    { label: "class", key: "class" },
    { label: "score", key: "score" },
    { label: "speed", key: "speed" },
    { label: "parents", key: "parents" }
  ];

  const data = [
    { name: "Nicole Kidmann", id: "7512552212", class: "1C", score: 78, speed: 'Below Expected', parents: 'Antony Kidmann, Janelle Kidmann' },
    { name: "Floyd Miles", id: "7512552212", class: "1C", score: 65, speed: 'Below Expected', parents: 'Antony Kidmann, Janelle Kidmann' },
    { name: "Kathryn Murphy", id: "7512552212", class: "1C", score: 89, speed: 'Below Expected', parents: 'Antony Kidmann, Janelle Kidmann' },
    { name: "Arlene McCoy", id: "7512552212", class: "1C", score: 99, speed: 'Below Expected', parents: 'Antony Kidmann, Janelle Kidmann' },
    { name: "Theresa Webb", id: "7512552212", class: "1C", score: 88, speed: 'Below Expected', parents: 'Antony Kidmann, Janelle Kidmann' },
    { name: "Dianne Russell", id: "7512552212", class: "1C", score: 79, speed: 'Below Expected', parents: 'Antony Kidmann, Janelle Kidmann' }
  ];

  const report = {
    filename: 'Report.csv',
    headers,
    data
  }


  return (
    <div className={classes.search}>
      <div className='root_container'>

        <div className={classes.search_wrapper}>
          <div className={classes.searchTitle}>
            <h1>Students</h1>
          </div>

          <form className={classes.search_form}>
            <input
              type='text'
              placeholder='Enter Student Name, Parent or ID here'
              onChange={changeInput}
            />
          </form>

          <div className={classes.exportCSV}>
            <SearchSvgSelector id='exportCVS' />
            <CSVLink className={classes.exportCSV} {...report}>
              export csv
            </CSVLink>

          </div>
        </div>

      </div>
    </div>
  )
}
