import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import React from 'react'

function HomeLayout({ children }) {
  return (
    <main>
      <Header />
      <div className='min-h-[calc(100vh-100px)]'>
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default HomeLayout
