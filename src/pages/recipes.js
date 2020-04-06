import React from "react"
import Layout from "../components/layout"
import RecipeData from "../../content/recipes.yml"

const YAMLbuildtime = () => (
<Layout>
  <div key="recipe-list" className="row">
    <div className="col s12 m6">
    {RecipeData.map(node => (
      <Recipe recipe={node}/>
    ))}
    </div>
  </div>
</Layout>
)
export default YAMLbuildtime

function Recipe(props) {
  const recipe = props.recipe;
  console.log(props)
  return (
    <div key={recipe.title} className="card" id={recipe.id}>
        <div className="card-image">
          <span className="card-title amber lighten-5">{recipe.title}</span>
        </div>
      <div className="card-content ">
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
