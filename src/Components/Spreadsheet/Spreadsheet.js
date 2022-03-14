import React from 'react'
import styles from './spreadsheet.module.scss'
import '../../globalStyles.scss'
import { studentBase } from '../../studentBase'
import { HeaderSvgSelector } from '../Header/HeaderSvgSelector'


export const Spreadsheet = () => {

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

            <div className={styles.sd_body}>
              <div className={styles.sd_body_row}>
                <input className={styles.check} type='checkbox' />
                <p className={styles.name_width}>{sb.name}</p>
                <p className={styles.id_width}>{sb.id}</p>
                <p className={styles.sd_class}>{sb.class}</p>
                <p className={styles.score_width}>{sb.score}</p>
                <p className={styles.speed_width}>{sb.speed}</p>
                <p className={styles.sd_parents}>{sb.parents}</p>
                <HeaderSvgSelector id='svg' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
