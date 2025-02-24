import { createLazyFileRoute } from '@tanstack/react-router'

import BubbleWrap from '../components/bubblewrap'

export const Route = createLazyFileRoute('/')({
  component: App,
})

// const grids = Array.from({ length: 64 })

function App() {
  return (
    <>
      <div className='my-8'>
        <h1 className='text-xl text-amber-600 md:text-3xl lg:text-5xl'>BWSR</h1>
        <p className='text-gray-400'>Bubble Wrap Stress Reducer</p>
      </div>
      <BubbleWrap />
    </>
  )
}

export default App
