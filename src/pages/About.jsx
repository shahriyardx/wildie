import React from 'react'
import Page from '../components/Layout/Page'
import Banner from '../components/Layout/Banner'
import Container from '../components/Layout/Container'

const About = () => {
  return (
    <Page>
      <Banner image='/images/about_banner.jpg' text="About" />

      <Container className='py-10'>
        <div className='flex flex-col gap-2 mb-10'>
          <h1 className='text-3xl font-bold text-green-900'>Intrtoduction</h1>
          <p className='text-lg'>
            Hi I am <span className=''>Wildie</span>. A single photographer passionate on taking wild life pictures. But I also capture
            other kind of photos like wedding, landscape, portrait etc. If you are looking for a professional photographer then you can check my services.
          </p>
        </div>


        <div className='flex flex-col gap-2 mb-2'>
          <h1 className='text-3xl font-bold text-green-900'>Experiences</h1>
          <p className='text-lg'>
            I have graduated from Herverd university last year. I have won various photography contests on National Geograpphy wild photography contest.
          </p>

          <div className='w-full flex flex-col items-center justify-center'>
            <img className='w-full max-w-[500px] rounded-lg' src='/images/lions.jpg' />
            <span className='text-zinc-500 underline mt-2'>Lions on Amazon</span>
          </div>

          <p className='text-lg'>
            The upper image was a winner image I took 2 years ago on Amazon rainforest. Which has the most lions in one frame.
          </p>
        </div>
      </Container>
    </Page>
  )
}

export default About