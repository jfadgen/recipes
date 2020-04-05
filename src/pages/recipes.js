import React from "react"
import RecipeData from "../../content/recipes.yml"

const YAMLbuildtime = () => (
  <div className="row">
    <div className="col s12 m6">
    {RecipeData.map(node => (
      <Recipe key={node.id} recipe={node}/>
    ))}
    </div>
  </div>
)
export default YAMLbuildtime

function Recipe(props) {
  const recipe = props.recipe;
  return (
    <div className="card">
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
