import React from 'react'
import Container from '../components/Layout/Container'
import Page from '../components/Layout/Page'
import Banner from '../components/Layout/Banner'
import useBlogs from '../hooks/useBlogs'
import Post from '../components/Blog/Post'

const Blog = () => {
  const blogs = useBlogs()

  return (
  <Page>
    <Banner image='/images/blog_banner.jpg' text="Blog" />
    <Container className='py-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {blogs.map(post => <Post key={post.id} post={post} />)}
      </div>
    </Container>
  </Page>
  )
}

export default Blog