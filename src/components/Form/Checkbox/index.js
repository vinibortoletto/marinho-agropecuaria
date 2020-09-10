import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../../Context'

// Components
import Stars from '../../Stars/index'

// Styles
import { Container } from './styles'

export default function Checkbox({ label, stars }) {
  const context = useContext(ProductContext)
  const { products, setSortedProducts, handleSortProducts } = context

  function handleCheckbox(event) {
    const checkbox = event.currentTarget
    const checkboxTag = event.currentTarget.value.toLowerCase()

    const localTags = JSON.parse(localStorage.getItem('tags'))

    function checking() {
      let newProducts = []
      const oldProducts = products

      let newLocalTags = []
      localTags ? newLocalTags.push(...localTags, checkboxTag) : newLocalTags.push(checkboxTag)

      newLocalTags.map(tag => {
        let filteredProducts = oldProducts.filter(product => product.fields.tags.includes(tag))
        newProducts.push(...filteredProducts)
      })

      setSortedProducts(newProducts)
      localStorage.setItem('tags', JSON.stringify(newLocalTags))
    }

    function unchecking() {
      let newProducts = []
      const oldProducts = products

      let newLocalTags = []
      newLocalTags = localTags.filter(tag => tag !== checkboxTag)
      localStorage.setItem('tags', JSON.stringify(newLocalTags))

      if (newLocalTags.length > 0) {
        newLocalTags.map(tag => {
          let filteredProducts = oldProducts.filter(product => product.fields.tags.includes(tag))
          newProducts.push(...filteredProducts)
        })

        setSortedProducts(newProducts)
      } else {
        const sortOption = JSON.parse(localStorage.getItem('sortOption'))
        handleSortProducts(sortOption, oldProducts)
        setSortedProducts(oldProducts)
      }
    }

    checkbox.checked ? checking() : unchecking()
  }

  // On mount, remove all tags from localStorage
  useEffect(() => {
    localStorage.removeItem('tags')
  }, [])

  return (
    <Container>
      <div>
        <label>
          <input onClick={handleCheckbox} value={label} type='checkbox' />
          <span className='checkmark' />
          {stars ? <Stars /> : label}
        </label>
      </div>
    </Container>
  )
}
