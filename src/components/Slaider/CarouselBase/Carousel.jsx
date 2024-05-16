import { useEffect, useState, Children, cloneElement } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {MainContainer, FaChevronLeft, Window, AllPagesContainer} from "./Carousel.styled"

const PAGE_WIDTH = 450

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

      console.log(newOffset, maxOffset)
      return Math.max(newOffset, maxOffset)
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
            height: '100%',
          },
        })
      })
    )
  }, [])

  return (
    <MainContainer>
      <FaChevronLeft onClick={handleLeftArrowClick} />
      <Window>
        <AllPagesContainer
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </AllPagesContainer>
      </Window>
      <FaChevronRight onClick={handleRightArrowClick} />
    </MainContainer>
  )
}