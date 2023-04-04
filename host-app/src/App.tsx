import RemoteComponent1 from 'remoteComponent1/RemoteComponent1'
import './App.css'

function App() {
  return (
    <>
      <h1>host app</h1>

      <RemoteComponent1 color="blue" />
      <RemoteComponent1 color="red" />
    </>
  )
}

export default App
