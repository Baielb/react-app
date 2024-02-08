
import React from 'react'
import css from './Main.module.css'

const Main = () => {
  return (
    <div className={css.main}>
      <h1 className={css.main__title}>Идеи, товары и услуги. 
        <br />
        Все для красивого дома
      </h1>
    </div>
  )
}

export default Main