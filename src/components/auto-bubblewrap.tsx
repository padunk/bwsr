import clsx from 'clsx/lite'
import React from 'react'

import bubleWrapDetail from '../assets/detail.png'

function AutoBubbleWrap({ grids }: { grids: number[] }) {
  const [gridTracker, setGridTracker] = React.useState<Record<string, boolean>>(
    () => {
      const initialGrids: Record<string, boolean> = {}
      grids.forEach((_, index) => {
        initialGrids[index] = false
      })
      return initialGrids
    }
  )

  const handleClick = (index: number) => {
    setGridTracker((prevGrids) => {
      return { ...prevGrids, [index]: true }
    })

    setTimeout(() => {
      setGridTracker((prevGrids) => {
        return { ...prevGrids, [index]: false }
      })
    }, 5000)
  }

  const isClicked = (index: number) => gridTracker[index]

  return (
    <>
      <div className='flex w-full gap-0.5 flex-wrap items-center justify-center'>
        {grids.map((_, index: number) => {
          return (
            <button
              key={index}
              className={clsx(
                'bg-none mb-0.5 transition-all ease-in-out hover:scale-102',
                isClicked(index) && 'animate-pop'
              )}
              role='button'
              onClick={() => handleClick(index)}
            >
              <img src={bubleWrapDetail} alt='bubble wrap detail' />
            </button>
          )
        })}
      </div>
    </>
  )
}

export default AutoBubbleWrap
