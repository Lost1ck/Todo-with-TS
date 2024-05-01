import React from "react";
import { useState } from "react"

type event = {
  key: string;
}

type TData = {
  data: IData[];
}

interface IData {
  id: number,
  name?: string,
  body?: {name: string},
  type?: string,
  lastName?: string,
}

type TFunc = (data: TData) => TData;

const data = [
  { id: 1, name: "dfersgdasf"},
  { id: 2, body: { name: "dfersgdasf" }},
  { id: 3, type: "person", name: "siberia", lastname: "siberiasdasd"},
]

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const flatData: TFunc = (data: TData) => data;
  

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && input.trim() !== '') {
      setTasks([...tasks, input])
      setInput('')
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  
  return (
    <div>
      <div>
          <ul>
            {tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
      </div>
      <hr />
      <div>
      <label htmlFor="taskInput">
            <input
              onKeyDown={handleKeyPress}
              onChange={handleInput}
              value={input}
              type="text"
              id='taskInput'
            />
          </label>
      </div>
    </div>
  )
}
