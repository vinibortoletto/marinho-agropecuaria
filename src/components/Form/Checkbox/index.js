import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../../Context'

// Components
import Stars from '../../Stars/index'

// Styles
import { Container } from './styles'

export default function Checkbox({ label, stars, type }) {
  const context = useContext(ProductContext)
  const { products, sortedProducts, setSortedProducts, handleSortProducts } = context
  const [isThereTags, setIsThereTags] = useState(false)

  function checking(checkboxCategory, localCategories, checkboxPrice, localPrices) {
    // let newProducts = []
    // const oldProducts = products

    // if (type === 'categories') {
    //   let newLocalCategories = []
    //   newLocalCategories.push(...localCategories, checkboxCategory)

    //   newLocalCategories.map(category => {
    //     let filteredProducts = oldProducts.filter(product => product.fields.tags.includes(category))
    //     newProducts.push(...filteredProducts)
    //   })

    //   setSortedProducts(newProducts)
    //   localStorage.setItem('categories', JSON.stringify(newLocalCategories))
    // }

    // if (type == 'prices') {
    //   let newLocalPrices = []
    //   newLocalPrices.push(...localPrices, checkboxPrice)

    //   newLocalPrices.map(price => {
    //     let filteredProducts = oldProducts.filter(product => product.fields.price <= price)
    //     newProducts.push(...filteredProducts)
    //   })

    //   setSortedProducts(newProducts)
    //   localStorage.setItem('prices', JSON.stringify(newLocalPrices))
    // }

    // handle multiple tags
    let newProducts = []
    const oldProducts = products

    let newLocalCategories = [...localCategories, checkboxCategory]
    let newLocalPrices = [...localPrices, checkboxPrice]
    // let newLocalRanking = [...localRanking, checkboxRanking]

    if (type === 'categories') {
      newLocalCategories.map(category => {
        let filteredProducts = isThereTags
          ? sortedProducts.filter(product => product.fields.tags.includes(category))
          : oldProducts.filter(product => product.fields.tags.includes(category))

        newProducts.push(...filteredProducts)
      })

      localStorage.setItem('categories', JSON.stringify(newLocalCategories))
    }

    if (type === 'prices') {
      newLocalPrices.map(price => {
        let filteredProducts = isThereTags
          ? sortedProducts.filter(product => product.fields.price <= price)
          : oldProducts.filter(product => product.fields.price <= price)

        newProducts.push(...filteredProducts)
      })

      localStorage.setItem('prices', JSON.stringify(newLocalPrices))
    }

    if (type === 'ranking') {
      // ranking logic
    }

    setSortedProducts(newProducts)
  }

  function unchecking(checkboxCategory, localCategories, checkboxPrice, localPrices) {
    let newProducts = []
    const oldProducts = products

    let newLocalCategories = localCategories.filter(category => category !== checkboxCategory)
    let newLocalPrices = localPrices.filter(price => price !== checkboxPrice)
    // let newLocalCategories = localCategories.filter(category => category !== checkboxCategory)

    if (type === 'categories') {
      if (newLocalCategories.length > 0) {
        newLocalCategories.map(category => {
          let filteredProducts = isThereTags
            ? sortedProducts.filter(product => product.fields.tags.includes(category))
            : oldProducts.filter(product => product.fields.tags.includes(category))
          newProducts.push(...filteredProducts)
        })
        setSortedProducts(newProducts)
      } else {
        const sortOption = JSON.parse(localStorage.getItem('sortOption'))

        handleSortProducts(sortOption, isThereTags ? sortedProducts : oldProducts)
        setSortedProducts(isThereTags ? sortedProducts : oldProducts)
      }

      localStorage.setItem('categories', JSON.stringify(newLocalCategories))
    }

    if (type === 'prices') {
      if (newLocalPrices.length > 0) {
        newLocalPrices.map(price => {
          let filteredProducts = isThereTags
            ? sortedProducts.filter(product => product.fields.price <= price)
            : oldProducts.filter(product => product.fields.price <= price)
        })
        setSortedProducts(newProducts)
      } else {
        const sortOption = JSON.parse(localStorage.getItem('sortOption'))

        handleSortProducts(sortOption, isThereTags ? sortedProducts : oldProducts)
        setSortedProducts(isThereTags ? sortedProducts : oldProducts)
      }

      localStorage.setItem('prices', JSON.stringify(newLocalPrices))
    }

    /* 
    
    TODO: figure out how to make more than 1 tags work at the same time
    */

    // -----------------------------------------------------------------------------------------
    // let newProducts = []
    // const oldProducts = products

    // if (type === 'categories') {
    //   let newLocalCategories = []
    //   newLocalCategories = localCategories.filter(tag => tag !== checkboxCategory)
    //   localStorage.setItem('categories', JSON.stringify(newLocalCategories))

    //   if (newLocalCategories.length > 0) {
    //     newLocalCategories.map(tag => {
    //       let filteredProducts = oldProducts.filter(product => product.fields.tags.includes(tag))
    //       newProducts.push(...filteredProducts)
    //     })

    //     setSortedProducts(newProducts)
    //   } else {
    //     const sortOption = JSON.parse(localStorage.getItem('sortOption'))
    //     handleSortProducts(sortOption, oldProducts)
    //     setSortedProducts(oldProducts)
    //   }
    // }

    // if (type == 'prices') {
    //   let newLocalPrices = []
    //   newLocalPrices = localPrices.filter(price => price !== checkboxPrice)
    //   localStorage.setItem('prices', JSON.stringify(newLocalPrices))

    //   if (newLocalPrices.length > 0) {
    //     newLocalPrices.map(price => {
    //       let filteredProducts = oldProducts.filter(product => product.fields.price <= price)
    //       newProducts.push(...filteredProducts)
    //     })

    //     setSortedProducts(newProducts)
    //   } else {
    //     const sortOption = JSON.parse(localStorage.getItem('sortOption'))
    //     handleSortProducts(sortOption, oldProducts)
    //     setSortedProducts(oldProducts)
    //   }
    // }
  }

  function handleCheckbox(e) {
    const checkbox = e.currentTarget

    const checkboxCategory = type === 'categories' && label.toLowerCase()
    const checkboxPrice = parseInt(label.split('$').pop())
    // const checkboxRanking = ?

    const localCategories = JSON.parse(localStorage.getItem('categories'))
    const localPrices = JSON.parse(localStorage.getItem('prices'))
    const localRanking = JSON.parse(localStorage.getItem('ranking'))

    checkbox.checked
      ? checking(checkboxCategory, localCategories, checkboxPrice, localPrices)
      : unchecking(checkboxCategory, localCategories, checkboxPrice, localPrices)

    localCategories && localCategories.length > 0 ? setIsThereTags(true) : setIsThereTags(false)
    localPrices && localPrices.length > 0 ? setIsThereTags(true) : setIsThereTags(false)
    localRanking && localRanking.length > 0 ? setIsThereTags(true) : setIsThereTags(false)
  }

  // On mount, remove all tags from localStorage
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify([]))
    localStorage.setItem('prices', JSON.stringify([]))
    localStorage.setItem('ranking', JSON.stringify([]))
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

/* 
  TODO: work on sidebar prices and ranking
 */
