//regular styled component not using a wrapper


import React from 'react'
import styled from 'styled-components'

const Title = ({ title, subtitle }) => {
 return (
  <div>
  <h4>
<span className='title'>{title}</span>
<span>{subtitle}</span>

  </h4>
  </div>
 )
}


export default Title
