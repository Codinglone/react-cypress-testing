const data = [
  {
    id: 1,
    name: 'Learn Testing with cypress',
    checked: false
  },
  {
    id: 2,
    name: 'Learn AI fundamentals',
    checked: false
  },
  {
    id: 3,
    name: 'Watch a movie',
    checked: false
  },
]

function App() {

  return (
    <>
     <h1 data-testid="cypress-title">Cypress dem</h1>
    

          {data.map((item) => (
            <div key={item.id}>
              <input type="checkbox" checked={item.checked} />
              <span data-testid={`todo-${item.id}`}>{item.name}</span>
            </div>
          ))}

          <button data-testid="cypress-button">Reload</button>
    </>
  )
}

export default App
