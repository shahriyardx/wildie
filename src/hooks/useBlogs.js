import { useState, useEffect } from "react"

const useBlogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("/data/blogs.json")
      .then(response => response.json())
      .then(data => setBlogs(data))
  }, [])

  return blogs
}

export default useBlogs