import React from 'react'

const Footer = () => {
  return (
    <div className="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2022 <a href="https://zarjevski.com/">Zarjevski</a>. All Rights Reserved.
    </span>
    <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
        <a href="https://www.facebook.com/zarjevski/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <span className="sr-only">Facebook page</span>
        </a>
        <a href="https://www.instagram.com/victor_zarjevski/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <span className="sr-only">Instagram page</span>
        </a>
        <a href="https://github.com/Zarjevski" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <span className="sr-only">GitHub account</span>
        </a>
    </div>
</div>
  )
}

export default Footer