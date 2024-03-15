"use client"
import { Button } from '@/components/ui/button';
import React from 'react'
import { useFormStatus } from 'react-dom'

function FormButton() {
    const {pending} = useFormStatus();

  return (
    <Button disabled={pending} type="submit">Submit</Button>
  )
}

export default FormButton