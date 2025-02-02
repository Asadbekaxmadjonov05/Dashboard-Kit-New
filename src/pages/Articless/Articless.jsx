import React from 'react'
import OverviewNav from '../../components/OverviewNav';
import Notfund from '../../components/NotFund';


function Articless() {
  return (
  <>
    <div className='sticky top-0 bg-[#d6dcfd] z-10 flex justify-between px-[32px] py-[15px] pt-5  rounded-b-[15px]'>
    <h1 className='text-[#252733] text-[24px] font-bold  leading-[30px]'>Articless</h1>
    <OverviewNav/>
  </div>
  <Notfund/>
  </>
  )
}

export default Articless
