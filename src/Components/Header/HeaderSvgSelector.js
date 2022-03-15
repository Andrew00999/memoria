import React from 'react'
import PropTypes from 'prop-types'
import styles from './header.module.scss'

export const HeaderSvgSelector = ({ id }) => {
  switch (id) {
    case 'svg':
      return (
        <svg className={styles.header_vector} width="10" height="7" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L5 5L10 0H0Z" fill="#777777" />
        </svg>
      )

    default: <svg></svg>
  }
}

HeaderSvgSelector.propTypes = {
  id: PropTypes.string
}
