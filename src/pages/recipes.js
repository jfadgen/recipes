import React from "react"
import RecipeData from "../../content/recipes.yml"

const YAMLbuildtime = () => (
  <div key="recipe-list" className="row">
    <div className="col s12 m6">
    {RecipeData.map(node => (
      <Recipe recipe={node}/>
    ))}
    </div>
  </div>
)
export default YAMLbuildtime

function Recipe(props) {
  const recipe = props.recipe;
  return (
    <div key={recipe.title} className="card">
      <div className="card-content ">
        <span className="card-title">{recipe.title}</span>
        <span>From: <a href={recipe.reference}>{recipe.reference}</a></span>

        <div>{recipe.cooking_summary}</div>
        <div className="recipe-section">Ingredients:
          <ul className="recipe-list">
            {recipe.ingredients.map((data, index) => {
              return <li key={`ingredients_item_${index}`}>{data.item}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
