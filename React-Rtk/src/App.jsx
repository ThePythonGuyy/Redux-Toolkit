
import './App.css'
import CakeView from './features/cake/CakeView'
import IceCreamView from './features/iceCream/IceCreamView'
import UserView from './features/userAsync/UserView'

function App() {
  

  return (
    <>
      <div>
        <CakeView />
        <IceCreamView />
        <UserView />
      </div>
    </>
  )
}

export default App
