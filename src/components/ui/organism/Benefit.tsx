import React from 'react'
import Heading2 from '../atom/Heading2'
import BenefitItem from '../molecules/BenefitItem'

const Benefit = () => {
  return (
    <div className="sectionContainer w-full flex flex-col items-center justify-center gap-10 pb-12 px-5 md:px-10">
      <Heading2 title="Enhance Your Business with Tangible Benefits" />
      <BenefitItem />
    </div>
  )
}

export default Benefit
