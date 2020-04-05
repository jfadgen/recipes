import React from "react"
import YAMLData from "../../content/recipes/ginger_cookies.yml"
const YAMLbuildtime = () => (
  <div class="recipe-container">
    <div class="recipe-header">
      <h1>{YAMLData.title}</h1>
      <div>From: <a href={YAMLData.reference}>{YAMLData.reference}</a></div>
    </div>

    <div>{YAMLData.cooking_summary}</div>
    <div>Ingredients:</div>
    <ul>
      {YAMLData.ingredients.map((data, index) => {
        return <li key={`ingredients_item_${index}`}>{data.item}</li>
      })}
    </ul>
  </div>
)
export default YAMLbuildtime
