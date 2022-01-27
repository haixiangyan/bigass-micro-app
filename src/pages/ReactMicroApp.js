import microApp from '@micro-zoe/micro-app'
import {useState} from "react";
/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'

const ReactMicroApp = () => {
  const [microAppState, setMicroAppState] = useState(microApp.getData('react-app'));

  const sendReactAppData = () => {
    microApp.setData('react-app', {
      name: `react-app 随机数: ${Math.random()}`
    })
  }

  const onDataChange = (e) => {
    console.log('react-app onDataChange', e);
    console.log('react-app 数据', e.detail.data);
    setMicroAppState(e.detail.data);
  }

  return (
    <div>
      <h1>react-app</h1>
      <button onClick={sendReactAppData}>基座 => react-app</button>

      <p>子应用消息 {microAppState ? microAppState.msg : '无'}</p>

      <micro-app
        name='react-app'
        url='http://localhost:3001/'
        baseroute='/react-app'
        onDataChange={onDataChange}
      >
      </micro-app>
    </div>
  )
}

export default ReactMicroApp;

