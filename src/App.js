import './App.css'
import Button from './components/Button'

function App() {

  const alertUser = () => {
    alert('Button Pressed')
  }

  return (
    <div>
      <Button text='Awesome Button' handleClick={alertUser} />
    </div >
  )
}

export default App
