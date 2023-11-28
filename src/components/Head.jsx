import React from 'react'
import Segment from '../components/Segmented'
import Styles from '../components/components.module.css'

const options =[
'Upcoming','Past'
]
const Head = (props) => {
    const {label} = props;
  return (
    <div className={Styles.headEl}>
        <h2>{label}</h2>
        <Segment  options={options}/>
    </div>
  )
}

export default Head ;