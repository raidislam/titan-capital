import React from "react"

export default function ResponsiveContainer({ children }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  )
}