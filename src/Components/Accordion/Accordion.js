import React, { useCallback } from 'react'
import styles from './accordion.module.scss'
import { studentBase } from '../../studentBase'
import { HeaderSvgSelector } from '../Header/HeaderSvgSelector'


export const Accordion = () => {


  const getList = useCallback((listCount, sb) => {
    return (
      [...new Array(listCount)].map((el, index) => {
        const itemValue = index + 1;
        return (
          <li key={index} className={styles.active_row} >
            <div className={styles.table_title}>
              <p className={styles.number}>{itemValue}.</p>
              <p className={styles.test}>Finding Averages 1 to 400</p>
              <p className={styles.score}>350</p>
              <p className={styles.speed}>1h 12m 41s</p>
              <p className={styles.total}>400</p>
              <p className={styles.exp_speed}>01h 00m 00s</p>
              <p className={styles.concept}>Multiplication</p>
              <p className={styles.date_body}>APR 30 2021</p>
              <p className={styles.absent}>
                <input type='checkbox' />
              </p>
            </div>
          </li>
        )
      }
      )
    )
  }, [])


  return (
    <div className={styles.accordion}>
      {studentBase.map((key) => (
        <div className={styles.body_wrap}>

          <div className={styles.title}>
            <span>student: <strong>{key.name}</strong></span>
            <span>id: <strong>{key.id}</strong></span>
          </div>

          <div className={styles.select_wrap}>
            <div className={styles.select}>
              <select>
                <option>All concepts</option>
              </select>
              <HeaderSvgSelector id='svg' />
            </div>
            <div className={styles.select}>
              <select>
                <option>All score</option>
              </select>
              <HeaderSvgSelector id='svg' />
            </div>
            <div className={styles.select}>
              <select>
                <option>All speed</option>
              </select>
              <HeaderSvgSelector id='svg' />
            </div>
            <div className={styles.input_wrap}>
              <input className={styles.select_input} type='text' placeholder='Select Period' />
            </div>
            <div className={styles.reload}>
              <div>
                <img src='/img/reload.webp' alt='' />
              </div>
            </div>
          </div>

          <div className={styles.description}>
            <div className={styles.score_row}>
              <span className={styles.desc_title}>score</span>
              <span className={`${styles.primaryBlue} ${styles.blue_circle}`}>90%+ accuracy</span>
              <span className={`${styles.primaryGreen} ${styles.green_circle}`}>80 - 89% accuracy</span>
              <span className={`${styles.primaryOrange} ${styles.orange_circle}`}>50 - 79% accuracy</span>
              <span className={`${styles.primaryRed} ${styles.red_circle}`}>below 50% accuracy</span>
            </div>
            <div className={styles.score_row}>
              <span className={styles.desc_title}>speed</span>
              <span className={`${styles.primaryBlue} ${styles.blue_circle}`}>above expected</span>
              <span className={`${styles.primaryGreen} ${styles.green_circle}`}>as expected</span>
              <span className={`${styles.primaryRed} ${styles.red_circle}`}>below expected</span>
            </div>
          </div>

          <div className={styles.accordion_table}>
            <div className={styles.table_title}>
              <p className={styles.number}>#</p>
              <p className={styles.test}>Test Label</p>
              <p className={styles.score}>Score</p>
              <p className={styles.speed}>Speed</p>
              <p className={styles.total}>Total Q-ns</p>
              <p className={styles.exp_speed}>Exp. Speed</p>
              <p className={styles.concept}>Concept</p>
              <p className={styles.date}>Date</p>
              <p className={styles.absent}>Absent</p>
            </div>

            {getList(5)}
          </div>
        </div>
      ))}
      <div className={styles.average}>
        <p className={styles.number}> </p>
        <h4 style={{marginRight: '7px'}} className={styles.test}>Average</h4>
        <p style={{color: '#4285F4'}} className={styles.score}><strong>96%</strong></p>
        <p style={{color: '#4285F4'}} className={styles.speed}><strong>Abouve Expected</strong></p>
      </div>

    </div>
  )
}
