import React from 'react'

export default function TSCheck() {
  interface AnyObject {
      [key: string]: unknown;
  }
  
  function mergeObjects<T extends AnyObject, U extends AnyObject>(obj1: T, obj2: U): T & U {
      return {...obj1, ...obj2};
  }

  function filterByLength(words: string[] | undefined, minLength: number): string[] {
    return (words || []).filter(word => word.length >= minLength);
  }

  const words = ['safasf', 'asfa', 'asdfa']

  function findElement<T>(arr: T[], key:keyof T, value: T[keyof T]): T | undefined{
    return arr.find(element => element[key] === value);
  }

  // Обобщённая функция сравнения: Напишите функцию, которая принимает два аргумента и возвращает true, если они равны, и false в противном случае. Используйте дженерики для поддержки разных типов данных.
  function returnBoolean<T>(a: T, b: T): boolean {
    return a === b
  }
  console.log('returnBollean', returnBoolean(1, 4))
  console.log('returnBollean', returnBoolean(1, 4))

  // Обобщённый класс контейнера: Создайте класс контейнера, который может хранить один элемент определённого типа. Используйте дженерики, чтобы класс был универсальным и мог работать с различными типами данных.
  class Container<T> {
    private item: T | undefined;

    constructor() {
      this.item = undefined;
    }

    addItem(item: T) {
      this.item = item;
    }

    setItem(item: T) {
      this.item = item;
    }
  }

  return (
    <>
    <div style={{border: '1px solid orange', width: '200px', height: '100px' }}>
      {filterByLength(words, 1)}
    </div>
    <div>TSCheck</div>
    </>
  )
}
