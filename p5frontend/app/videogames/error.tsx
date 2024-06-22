'use client' 

import { useEffect } from 'react'
import Button from '@/components/ui/Button'
import Link from 'next/link'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-y-20'>
      <h2 className='font-extrabold	text-4xl	'>Something went wrong!</h2>
      <Link href="/">
        <Button label='Go back to the Library'>
        </Button>
      </Link>
    </div>
  )
}