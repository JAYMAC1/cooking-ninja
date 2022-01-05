// Styles
import { useState, useRef, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import './Create.css'
import { useFetch } from '../../hooks/useFetch'

const Create = () => {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientsInput = useRef(null)

  const { postData, data, error } = useFetch(
    'http://localhost:3000/recipes',
    'POST'
  )
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes',
    })
  }

  useEffect(() => {
    if (data) {
      history.push('/')
    }
  }, [data, history])

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIng) => [...prevIng, ing])
    }
    setNewIngredient('')
    ingredientsInput.current.focus()
  }
  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe ingredients</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientsInput}
            />
            <button onClick={handleAdd} className='btn'>
              Add
            </button>
          </div>
        </label>
        <p className='ingredients'>
          Current ingredients:{' '}
          {ingredients.map((ing) => (
            <em key={ing}>{ing}, </em>
          ))}
        </p>

        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time (mins):</span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}

export default Create
