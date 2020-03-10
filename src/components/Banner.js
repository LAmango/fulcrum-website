import React from 'react'

const Banner = ({title, subTitle, style}) => (
  <section id="banner" className={style}>
    <div className="inner">
      <header className="major">
        <h1>{title}</h1>
      </header>
      <div className="content">
        <p dangerouslySetInnerHTML={{__html: subTitle}} />
      </div>
    </div>
  </section>
)

export default Banner
