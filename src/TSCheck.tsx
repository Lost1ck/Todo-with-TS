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
  // Обобщённая функция преобразования массива: Напишите функцию, которая принимает массив элементов одного типа и функцию преобразования, и возвращает новый массив, содержащий результат применения функции к каждому элементу исходного массива.

  const arr = [123, 415, 346, 372];
  function convertSmall(data: number[]): number[] | void {
    for(let number of data) {
      data[number] *= 2
    }
    return;
  }

  type TConvertFunc<T> = (data: T) => T;
  
  function convertationArray<T> (words: T, func: TConvertFunc<T>): T {
    return func(words)
  }

  // Обобщённый класс пары: Создайте класс, представляющий пару значений (например, ключ и значение). Используйте дженерики, чтобы класс мог работать с различными типами значений.

  class pairs<T,U> {
    private first: T;
    private second: U;

    constructor(first: T, second: U) {
      this.first = first;
      this.second = second;
    }

    goFirst(): T{
      return this.first;
    }

    goSecond(): U{
      return this.second;
    }
  }

  // Обобщённый интерфейс функции: Определите интерфейс для функции, которая принимает два аргумента одного типа и возвращает значение этого же типа. Используйте дженерики для определения типа аргументов и возвращаемого значения.

  interface backTypeFunc<T> {
    (a: T, b: T): T;
  };

  return (
    <>
    <div style={{border: '1px solid orange', width: '200px', height: '100px' }}>
      {filterByLength(words, 1)}
    </div>
    <div>TSCheck</div>
    </>
  )
}
