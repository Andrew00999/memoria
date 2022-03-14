import React, { useState, useCallback } from 'react'
import styles from './spreadsheet.module.scss'
import '../../globalStyles.scss'
import { studentBase } from '../../studentBase'
import { HeaderSvgSelector } from '../Header/HeaderSvgSelector'
import classNames from 'classnames'

export const Spreadsheet = () => {
  const [openedId, setOpenedId] = useState(0)

  const inputClick = event => {
    event.stopPropagation()
  }

  const handleShowMore = useCallback((e) => {
    const id = e.currentTarget.getAttribute('data-id')
    setOpenedId(+id === openedId ? null : +id)
  }, [setOpenedId, openedId])

  const geList = useCallback((listCount, sb) => {
    return (
      [...new Array(listCount)].map((el, index) => {
        const itemValue = index + 1;
        return (
          <li key={index} className={styles.sd_body}>
            <div className={styles.sd_body_row} onClick={handleShowMore} data-id={itemValue}>
              <input onClick={inputClick} className={styles.check} type='checkbox' />
              <p className={styles.name_width}>{sb.name}</p>
              <p className={styles.id_width}>{sb.id}</p>
              <p className={styles.sd_class}>{sb.class}</p>
              <p className={classNames(styles.score_width, styles.primaryOrange)}>{`${sb.score + itemValue}%`}</p>
              <p className={classNames(styles.speed_width, styles.primaryRed)}>{sb.speed}</p>
              <p className={styles.sd_parents}>{sb.parents}</p>
              <HeaderSvgSelector id='svg' />
            </div>
            {openedId === itemValue && (
              <div className={styles.accordion}>
                Hello
              </div>
            )}
          </li>
        )
      })
    );
  }, [handleShowMore, openedId]);

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
            <ul className={styles.null_list}>{geList(10, sb)}</ul>
          </div>
        ))}
      </div>
    </div>
  )
}
