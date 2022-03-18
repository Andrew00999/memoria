import React, { useState, useCallback, useEffect } from 'react'
import styles from './spreadsheet.module.scss'
import '../../globalStyles.scss'
import { studentBase } from '../../studentBase'
import { HeaderSvgSelector } from '../Header/HeaderSvgSelector'
import classNames from 'classnames'
import Accordion from '../Accordion'
import axios from 'axios'
import Pagination from './Pagination'



export const Spreadsheet = ({ value }) => {
  const [openedId, setOpenedId] = useState(0)
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [studentsPerPage] = useState(10)


  const belowExpected = 'Below Expected'
  const aboveExpected = 'Above Expected'
  const asExpected = 'As Expected'

  const lastStudentIndex = currentPage * studentsPerPage
  const firstStudentIndex = lastStudentIndex - studentsPerPage
  const currentStudent = students.slice(firstStudentIndex, lastStudentIndex)


  const filteredStudents = students.filter(student => {
    return (
      student.name.toLowerCase().includes(value.toLowerCase())
    )
  })



  const paginate = pageNumder => setCurrentPage(pageNumder)


  const getStusents = useCallback(async (e) => {
    const params = {
      page: 1,
      size: 20
    }
    const response = await axios.get(`https://test-task-j.herokuapp.com/data`, { params })
    setStudents(response.data.data);
    setLoading(false)
  }, [])

  const handleShowMore = useCallback((e) => {
    const id = e.currentTarget.getAttribute('data-id')
    setOpenedId(+id === openedId ? null : +id)
  }, [setOpenedId, openedId])

  const getList = useCallback((sb) => {
    const filteredAndCurrentStudent = [...filteredStudents, ...currentStudent]
    return (
      filteredAndCurrentStudent.map((el, index) => {
        const score = el.score.replace(/%/g, '');
        const itemValue = index + 1;
        if (loading) {
          return <h2>Loading...</h2>
        }
        return (
          <li key={index} className={styles.sd_body}>
            <div className={styles.sd_body_row} onClick={handleShowMore} data-id={itemValue}>
              <input onClick={(e) => e.stopPropagation()} className={styles.check} type='checkbox' />
              <p className={styles.name_width}>{el.name}</p>
              <p className={styles.id_width}>{el.id}</p>
              <p className={styles.sd_class}>{el.class}</p>
              <p className={classNames({
                [`${styles.score_width}`]: true,
                [`${styles.primaryRed}`]: +score <= 50,
                [`${styles.primaryOrange}`]: +score > 50 && +score <= 79,
                [`${styles.primaryGreen}`]: +score >= 80 && +score <= 89,
                [`${styles.primaryBlue}`]: +score >= 90 && +score <= 100
              })}>{el.score}</p>
              <p className={classNames({
                [`${styles.speed_width}`]: true,
                [`${styles.primaryRed}`]: el.speed === belowExpected,
                [`${styles.primaryBlue}`]: el.speed === aboveExpected,
                [`${styles.primaryGreen}`]: el.speed === asExpected,
              })}>{el.speed}</p>
              <p className={styles.sd_parents}>{el.parents}</p>
              <HeaderSvgSelector id='svg' />
            </div>
            {openedId === itemValue && (
              <Accordion />
            )}
          </li>
        )
      })
    );
  }, [currentStudent, filteredStudents, handleShowMore, loading, openedId]);

  useEffect(() => {
    if (!students.length) {
      getStusents();
    }
  }, [getStusents, students.length]);

  return (
    <div className={styles.spreadsheet}>
      <div className='root_container'>
        {studentBase.map((sb) => (
          <div key={sb.id} className={styles.sd_wrapper}>
            <div className={styles.sd_title}>
              <input className={styles.check} type='checkbox' />
              <p className={styles.sd_name}>Name</p>
              <p className={styles.sd_id}>ID</p>
              <p className={styles.sd_class}>Class</p>
              <p className={styles.sd_score}>Av. Score,%</p>
              <p className={styles.sd_speed}>Av. Speed</p>
              <p className={styles.sd_parents}>Parents</p>
              <span style={{ width: '15px' }}></span>
            </div>
            <ul className={styles.null_list}>{getList(sb)}</ul>
            <div className={styles.nav_pagination}>
              <div className={styles.pagination_select}>
                <span>Rows per page: 10 / 20</span>
                <Pagination
                  studentsPerPage={studentsPerPage}
                  totalStudents={students.length}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}
