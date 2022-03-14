import React from 'react'
import { HeaderSvgSelector } from './HeaderSvgSelector.js'
import styles from './header.module.scss'
import '../../globalStyles.scss'

export const Header = () => {

  const listNames = ['Analytics', 'gradebooks', 'Tests', 'Students', 'Teachers', 'archive']

  return (
    <div className='root_container'>
      <div className={styles.header}>
        <div className={styles.select}>
          <select>
            <option type='text'>school 1</option>
            <option type='text'>school 2</option>
            <option type='text'>school 3</option>
          </select>
          <HeaderSvgSelector id='svg' />
        </div>

        <nav>
          <ul className={styles.list}>
            {listNames.map((listName) => (
              <li key={listName}> <a href='##'>{listName}</a> </li>
            ))}
          </ul>
        </nav>

        <div className={styles.header_profile}>
          <div className={styles.header_profile_img_block}>
            <img src='/img/profile_photo.webp' alt='profile_photo' />
          </div>
          <div>
            <HeaderSvgSelector id='svg' />
          </div>
        </div>

      </div>

    </div>
  )
}
