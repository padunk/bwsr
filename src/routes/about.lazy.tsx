import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: Query,
})

function Query() {
  return (
    <div className='p-2'>
      <p>Watch out for Dogs...</p>
    </div>
  )
}
