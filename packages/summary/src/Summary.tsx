import React from 'react'

type SummaryProps = {
  title: string;
}

export default function Summary({ title }: SummaryProps) {
  return (
    <div>{title}</div>
  )
}
