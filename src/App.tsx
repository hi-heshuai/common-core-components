import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Common Core Components</h1>
      
      <section className="component-section">
        <h2>Button Component</h2>
        <div className="component-demo">
          <Button onClick={() => console.log('Primary button clicked')}>
            Primary Button
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => console.log('Secondary button clicked')}
          >
            Secondary Button
          </Button>
          <Button variant="outline">Outline Button</Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </section>

      <section className="component-section">
        <h2>Card Component</h2>
        <div className="component-demo">
          <Card title="Card Title">
            <p>This is a card component with some content.</p>
            <p>Click the button below to increment the counter.</p>
            <p>Count: {count}</p>
            <Button onClick={() => setCount(count + 1)}>
              Increment
            </Button>
          </Card>

          <Card 
            title="Card with Footer" 
            footer={
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="outline" onClick={() => setCount(0)}>
                  Reset Counter
                </Button>
              </div>
            }
          >
            <p>This card has a footer with a button.</p>
            <p>Current count: {count}</p>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default App
