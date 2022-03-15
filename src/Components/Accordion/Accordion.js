import React from 'react'
import styles from './accordion.module.scss'
import { studentBase } from '../../studentBase'
import { HeaderSvgSelector } from '../Header/HeaderSvgSelector'


export const Accordion = () => {
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

            <div className={styles.select_wrap}>
              <input className={styles.select_input} type='text' placeholder='Select Period' />
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}
