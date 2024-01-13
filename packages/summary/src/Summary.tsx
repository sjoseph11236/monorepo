import React from 'react'

type SummaryProps = {
  title: string;
  subTitle: string;
  name: string;
}

export default function Summary({ title, subTitle, name }: SummaryProps) {
  return (
    <div>{title}{subTitle}{name}</div>
  )
}
