import React from 'react'

export default function TSCheck() {
  interface AnyObject {
      [key: string]: unknown;
  }
  
  function mergeObjects<T extends AnyObject, U extends AnyObject>(obj1: T, obj2: U): T & U {
      return {...obj1, ...obj2};
  }
  
  return (
    <div>TSCheck</div>
  )
}
