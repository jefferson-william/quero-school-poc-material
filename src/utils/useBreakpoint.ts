import { useState, useCallback, useEffect } from 'react'
import throttle from 'lodash.throttle'

export const getDeviceConfig = (width: number) => {
  if (width >= 1920) {
    return 'xl'
  } else if (width >= 1200) {
    return 'lg'
  } else if (width >= 992) {
    return 'md'
  } else if (width >= 768) {
    return 'sm'
  }

  return 'xs'
}

export default function() {
  const [breakpoint, UseBreakpoint] = useState(getDeviceConfig(window.innerWidth))

  const HandleResize = throttle(useCallback(() => UseBreakpoint(getDeviceConfig(window.innerWidth)), []))

  useEffect(() => {
    window.addEventListener('resize', HandleResize)

    return () => {
      window.removeEventListener('resize', HandleResize)
    }
  }, [])

  return breakpoint
}
