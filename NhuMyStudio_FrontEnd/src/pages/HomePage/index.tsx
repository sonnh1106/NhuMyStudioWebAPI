// import React from 'react'

// function HomePage() {
//   return (
//     <div>index</div>
//   )
// }

// export { HomePage }

import Navbar from '../../components/layouts/Navbar'
import style from "./style.module.scss"
export default function HomePage() {
  return (
    <div className={style.main} >
        <Navbar/>
    </div>
  )
}
