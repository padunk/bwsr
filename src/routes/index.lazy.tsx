import { createLazyFileRoute } from '@tanstack/react-router'

import BubbleWrap from '../components/bubblewrap'

export const Route = createLazyFileRoute('/')({
  component: App,
})

// const grids = Array.from({ length: 64 })

function App() {
  return (
    <main className='container mx-auto px-4'>
      <article className='my-8'>
        <section>
          <h1 className='text-xl text-amber-600 md:text-3xl lg:text-5xl'>
            BWSR
          </h1>
          <p className='text-gray-400'>Bubble Wrap Stress Reducer</p>
        </section>
        <section className='my-6 flex items-center justify-center'>
          <p className='text-gray-300 max-w-prose'>
            Welcome to BWSR, your virtual bubble wrap popping experience.
            Relieve stress and anxiety with the satisfying pop of digital bubble
            wrap. Each bubble features unique sounds and visuals for a more
            engaging experience.
          </p>
        </section>
        <section aria-label='Interactive Bubble Wrap'>
          <BubbleWrap />
        </section>
      </article>
    </main>
  )
}

export default App
