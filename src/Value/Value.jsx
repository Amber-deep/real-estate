import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './value.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../utils/accordion'


const Value = () => {
  return (
    <div className='container' id='value'>
      <div className='row my-5'>
        <div className='col-md-6'>
            <div className='image-container'>
                <img src='./value.png' alt='hero-img' className='imgg' />
            </div>
        </div>
        <div className='col-md-6'>
            <div className='mb-md-5 my-5'>
                <h3 className='orangeText'>Our Value</h3>
                <h2 className='purpleText mb-4'>Value we give to you</h2>
                <p className='text-secondary'>
                    <span>We always ready to help by providing the best services for you.</span>
                    <span>We believe a good place to live can make oyur life better.</span>
                </p>
            </div>
            <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
            >
                {data.map((item,i) => {
                    return (
                        <AccordionItem className='accordionItem' key={i} uuid={i}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className='row AccordionItemButton'>
                                        <div className='col-3'>
                                            <span className='icon'>{item.icon}</span>
                                        </div>
                                        <div className='col-7'>
                                            <h6 className='purpleText my-1'>{item.heading}</h6>
                                        </div>
                                        <div className='col-2'>
                                            <MdOutlineArrowDropDown className='icon' size={30}/>
                                        </div>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    <p>{item.detail}</p>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                    })}
            </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Value
