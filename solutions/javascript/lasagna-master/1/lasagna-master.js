/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */


export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.'
  } else if (remainingTime == 0) {
    return 'Lasagna is done.'
  } else {
    return 'Not done, please wait.'
  }
}

export function preparationTime(layers, prepTime = 2) {
  return layers.length * prepTime
}

export function quantities(layers) {
  return{
    'noodles': 50 * layers.filter(x => x === 'noodles').length,
    'sauce': 0.2 * layers.filter(x => x === 'sauce').length
  }
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.at(-1))
}

export function scaleRecipe(recipe, portions) {
  let newRecipe = {}
  for (let key in recipe){
    newRecipe[key] = recipe[key] * (portions/2)
  }
  return newRecipe
}