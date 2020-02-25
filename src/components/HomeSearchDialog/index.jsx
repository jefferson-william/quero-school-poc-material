import React from 'react'
import { HomeSearchDialog } from './styles'

export default function({ children, className, open, onClose }) {
  return (
    <HomeSearchDialog open={open} onClose={onClose} className={`home-search-dialog ${className}`}>
      {children}
    </HomeSearchDialog>
  )
}
