import React from 'react'
import styles from './spreadsheet.module.scss'

const Pagination = ({ studentsPerPage, totalStudents, paginate }) => {
  const pageNumber = []


  for (let i = 0; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <div>
      <ul className={styles.link_pagination}>
        {
          pageNumber.map(number => (
            <li key={number}>
              <a href='!#' onClick={() => paginate(number)}>
                {number + 1}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination