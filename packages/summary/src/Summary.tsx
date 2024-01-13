import React from 'react'

type SummaryProps = {
  title: string;
  subTitle: string;
  name: string;
  type: string;
}

export default function Summary({ title, subTitle, name, type }: SummaryProps) {
  return (
    <div>{title}{subTitle}{name}</div>
  )
}
