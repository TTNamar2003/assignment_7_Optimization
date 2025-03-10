import React from 'react'
import PopUpDisplay from './components/PopUpDisplay'
import DisplayImages from '@/app/components/DisplayImages'
export default function page() {
  return (
    <div className='min-w-screen bg-gray-100 min-h-screen'>
      <p>home page</p>
      <PopUpDisplay/>
      <DisplayImages/>
    </div>
  )
}
