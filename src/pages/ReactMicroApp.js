import microApp from '@micro-zoe/micro-app'

const ReactMicroApp = () => {
  const sendReactAppData = () => {
    microApp.setData('react-app', {
      name: 'react-app'
    })
  }

  return (
    <div>
      <h1>react-app</h1>
      <micro-app name='react-app' url='http://localhost:3001/' baseroute='/react-app'></micro-app>
      <button onClick={sendReactAppData}>发数据给 react-app</button>
    </div>
  )
}

export default ReactMicroApp;

