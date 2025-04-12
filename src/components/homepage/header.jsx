import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const Header = () => {
  return (
    <div className='py-2 bg-[#5443DA] w-full text-white flex justify-center whitespace-nowrap'>
      <div className='flex gap-[10px] flex-col sm:flex-row'>
        <div className='text-[12px] leading-[150%] text-[#EBE9FA] font-medium'>
          Checkout Our Other Cold Emailing Tools |
        </div>
        <div className='flex gap-2'>
        <Link
          href="https://www.validleads.co/"
          target='_blank'
          className="flex items-center text-[12px] text-nowrap leading-[150%] font-medium underline"
        >
          Validleads.co
          <ArrowUpRight className="w-3 h-3 mt-[1px]" />
        </Link>
        <Link
          href="/#"
          className="flex items-center text-[12px] text-nowrap leading-[150%] font-medium underline"
        >
          Inbox Automation
          <ArrowUpRight className="w-3 h-3 mt-[1px]" />
        </Link>
        <Link
          href="https://www.primaryinbox.ai/"
          target='_blank'
          className="flex items-center text-[12px] text-nowrap leading-[150%] font-medium underline"
        >
          Primary Inbox
          <ArrowUpRight className="w-3 h-3 mt-[1px]" />
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Header