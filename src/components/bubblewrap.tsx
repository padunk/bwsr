import clsx from 'clsx/lite'
import React from 'react'

import bubleWrapDetail from '../assets/detail.png'
import bubleWrapDetail1 from '../assets/detail1.png'
import bubleWrapDetail2 from '../assets/detail2.png'
import bubleWrapDetail3 from '../assets/detail3.png'
import bubleWrapDetail4 from '../assets/detail4.png'
import popupSound from '../assets/popup.wav'
import popupSound2 from '../assets/popup2.mp3'
import Button from './ui/button'

type Grid = {
  id: string
  clicked: boolean
  src: string
}

const initialGrid: Array<Grid> = Array.from({ length: 64 }, () => {
  const id = crypto.randomUUID()
  return {
    id,
    clicked: false,
    src: getRandomImage(id),
  }
})

function getRandomImage(id: string) {
  const images = [
    bubleWrapDetail,
    bubleWrapDetail1,
    bubleWrapDetail2,
    bubleWrapDetail3,
  ]
  const randomIndex = parseInt(id.split('-').at(-1)!, 16) % 4
  return images[randomIndex]
}

function BubbleWrap() {
  const [grids, setGrids] = React.useState<Array<Grid>>(() => initialGrid)

  const audioRef1 = React.useRef(new Audio(popupSound))
  const audioRef2 = React.useRef(new Audio(popupSound2))

  const handleClick = (index: number) => {
    setGrids((prevGrids) => {
      const newGrids = JSON.parse(JSON.stringify(prevGrids))
      newGrids[index].clicked = true

      return newGrids
    })

    const audioRef = index % 2 === 0 ? audioRef1 : audioRef2
    audioRef.current.currentTime = 0
    audioRef.current.play()
  }

  const handleReset = () => {
    setGrids(initialGrid)
  }

  return (
    <>
      <div className='h-12 mb-6'>
        {grids.some((grid) => grid.clicked) && (
          <Button onClick={handleReset}>Reset</Button>
        )}
      </div>
      <div className='flex w-full gap-0.5 flex-wrap items-center justify-center'>
        {grids.map(({ id, clicked, src }, index: number) => {
          return (
            <button
              key={id}
              disabled={clicked}
              className={clsx(
                'bg-none mb-0.5 transition-all duration-1000 ease-in-out  bg-clip-text',
                clicked && 'bg-gray-600 opacity-20 scale-95 cursor-auto',
                !clicked && 'hover:scale-102 cursor-pointer',
                index % 2 === 1 && 'translate-y-1/2'
              )}
              role='button'
              onClick={() => handleClick(index)}
            >
              <img
                src={clicked ? bubleWrapDetail4 : src}
                alt='bubble wrap detail'
              />
            </button>
          )
        })}
      </div>
      <div className='h-12 mt-20'>
        {grids.some((grid) => grid.clicked) && (
          <Button onClick={handleReset}>Reset</Button>
        )}
      </div>
    </>
  )
}

export default BubbleWrap
