import React from 'react'
import styles from './filter.module.scss'
import selectStyles from '../Header/header.module.scss'
import '../../globalStyles.scss'
import { HeaderSvgSelector } from '../Header/HeaderSvgSelector'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export const Filter = () => {

  return (
    <div className={styles.filter}>
      <div className='root_container'>

        <div className={styles.filters_wrap}>
          <div className={selectStyles.select}>
            <select style={{ color: '#C0C0C0' }}>
              <option type='text'>show all</option>
            </select>
            <HeaderSvgSelector id='svg' />
          </div>

          <div className={selectStyles.select}>
            <select style={{ color: '#C0C0C0' }}>
              <option type='text'>All grades</option>
            </select>
            <HeaderSvgSelector id='svg' />
          </div>

          <div className={selectStyles.select}>
            <select style={{ color: '#C0C0C0' }}>
              <option type='text'>All classes</option>
            </select>
            <HeaderSvgSelector id='svg' />
          </div>

          <div className={selectStyles.select}>
            <select style={{ color: '#C0C0C0' }}>
              <option type='text'>Av.Score</option>
            </select>
            <HeaderSvgSelector id='svg' />
          </div>

          <div className={selectStyles.select}>
            <select style={{ color: '#C0C0C0' }}>
              <option type='text'>Av.Speed</option>
            </select>
            <HeaderSvgSelector id='svg' />
          </div>

          <div className={selectStyles.select}>
            <select style={{ color: '#C0C0C0' }}>
              <option type='text'>All Classes</option>
            </select>
            <HeaderSvgSelector id='svg' />
          </div>

          <div className={styles.clear}>
            <FontAwesomeIcon className={styles.styled_xmark} icon={faXmark} />
            <p>clear all</p>
          </div>

        </div>

      </div>
    </div>
  )
}
