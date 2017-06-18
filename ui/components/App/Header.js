import React, { Component } from 'react'
import styles from './Header.scss'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {

    return (
      <header className={styles['header']}>
        <nav>
          <Link to='/'
            className={styles['brand']}>
            Babel Coder Wiki!
          </Link>
          <ul className={styles['menu']}>
            <li className={styles['menu__item']}>
              <Link to='/pages'
                className={styles['menu__link']}>
                All pages
              </Link>
            </li>
            <li className={styles['menu__item']}>
              <a
                href='#'
                className={styles['menu__link']}>
                About us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
    // return (
    //   <header className={styles['header']}>
    //     <nav>
    //
    //       <a href='/' className={styles['brand']}>
    //         Korshreddern Wiki!
    //       </a>
    //
    //       <ul className={styles['menu']}>
    //
    //         <li className={styles['menu__item']}>
    //           <a href='/pages' className={styles['menu__link']}>
    //             All Pages
    //           </a>
    //         </li>
    //
    //         <li className={styles['menu__item']}>
    //           <a href='#' className={styles['menu__link']}>
    //             About us
    //           </a>
    //         </li>
    //
    //       </ul>
    //
    //     </nav>
    //   </header>
    // )
  }
}
