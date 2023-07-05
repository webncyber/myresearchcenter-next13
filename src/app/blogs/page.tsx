import React from 'react'
import SingleColumnContent from '../components/singleColumnContent/SingleColumnContent'

export default function Blogs() {
  return (
    <div className='content-section'>
      {
         SingleColumnContent("/home.json")
      }
  </div>
  )
}
