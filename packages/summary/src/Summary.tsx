import React from 'react'

type SummaryProps = {
  title: string;
  subTitle: string;
}

export default function Summary({ title, subTitle }: SummaryProps) {
  return (
    <div>{title}{subTitle}</div>
  )
}
