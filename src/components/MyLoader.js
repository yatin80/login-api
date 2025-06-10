import React from 'react'
import ContentLoader from 'react-content-loader'

export default function MyLoader() {
  return (
    <ContentLoader viewBox="0 0 340 400" speed={1}>
    <rect x="10" y="10" rx="5" ry="5" width="380" height="320" />
    <rect x="10" y="340" rx="5" ry="5" width="380" height="20" />
    <rect x="10" y="370" rx="5" ry="5" width="380" height="20" />
    <rect x="10" y="400" rx="5" ry="5" width="380" height="20" />
  </ContentLoader>
  )
}
