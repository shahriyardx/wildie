import { useState, useEffect } from "react"

const useServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch("/data/services.json")
      .then(response => response.json())
      .then(data => setServices(data))
  }, [])

  return services
}

export default useServices