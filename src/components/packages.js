import React from 'react'
import { Link } from 'gatsby'

const Packages = ({packages}) => {
  const [tab, setTab] = React.useState(packages[0].name);
  const [tabContent, setTabContent] = React.useState(packages[0].options);

  React.useEffect(() => {

  }, tab)

  return (
  <section id="two">
    <a id="services"/>
    <div className="inner">
      <header className="major">
        <h2><a href="#services">Services</a></h2>
      </header>
      <div className="group">
        <div className="col-4 packages">
          {packages.map(pack => (
            <div key={pack.name}>
              <div className="mb-5 package">
                <input
                  type="radio"
                  id={pack.name}
                  checked={tab === pack.name}
                  value={pack.name}
                  onChange={e => setTab(e.target.value)}
                />
                <label htmlFor={pack.name}>{pack.name}</label>
              </div>
            </div>
          ))}
        </div>
        <div className="col-8">
          <ul>
            {packages.filter(pack => pack.name === tab)[0].options.map(option => (
              <li key={option.name}>{option.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Packages