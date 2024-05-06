import { store } from '../src/store/store.js'

export const App = () => {
  const { animalStore } = store()
  return (
    <div className="underline border bg-red-400">
      <h1>Hello Dani</h1>
      <p>Bears:{animalStore.bears}</p>
      <button onClick={() => animalStore.addBear()}>Increase Bears</button>
    </div>
  )
}
