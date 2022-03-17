import React, { useState, useCallback, useEffect } from 'react'
import styles from './spreadsheet.module.scss'
import '../../globalStyles.scss'
import { studentBase } from '../../studentBase'
import { HeaderSvgSelector } from '../Header/HeaderSvgSelector'
import classNames from 'classnames'
import Accordion from '../Accordion'
import axios from 'axios'

export const Spreadsheet = () => {
  const [openedId, setOpenedId] = useState(0)
  const [students, setStudents] = useState([])
  const belowExpected = 'Below Expected'
  const aboveExpected = 'Above Expected'
  const asExpected = 'As Expected'

  console.warn('belowExpected', belowExpected)

  const getStusents = useCallback(async (e) => {
    const params = {
      page: 1,
      size: 10
    }
    const response = await axios.get(`https://test-task-j.herokuapp.com/data`, { params })
    await setStudents(response.data.data);
  }, [])

  const handleShowMore = useCallback((e) => {
    const id = e.currentTarget.getAttribute('data-id')
    setOpenedId(+id === openedId ? null : +id)
  }, [setOpenedId, openedId])

  const getList = useCallback((sb) => {
    return (
      students.map((el, index) => {
        const score = el.score.replace(/%/g, '');
        const itemValue = index + 1;
        return (
          <li key={el.id} className={styles.sd_body}>
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
  }, [handleShowMore, openedId, students]);

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
            <ul className={styles.null_list}>{getList(10, sb)}</ul>
          </div>
        ))}
      </div>
    </div>
  )
}
