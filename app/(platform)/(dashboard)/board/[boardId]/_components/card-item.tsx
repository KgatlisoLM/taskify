"use client"

import { Card } from '@prisma/client'
import React from 'react'

interface CardItemProps {
   index: number
   data: Card
}

export default function CardItem({index, data}: CardItemProps) {
  return (
    <div
     role='button'
     className='truncate border-2 border-transparent hover:border-gray-500 py-2 px-3 text-sm bg-white rounded-md shadow-sm'>
     {data.title}
    </div>
  )
}
