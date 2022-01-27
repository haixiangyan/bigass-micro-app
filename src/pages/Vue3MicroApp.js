import microApp from "@micro-zoe/micro-app";
/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import {useState} from "react";

const Vue3MicroApp = () => {
  const [microAppState, setMicroAppState] = useState(microApp.getData('react-app'));

  const sendVue3AppData = () => {
    microApp.setData('vue3-app', {
      name: `vue3-app 随机数: ${Math.random()}`
    })
  }

  const onDataChange = (e) => {
    console.log('vue3-app onDataChange', e);
    console.log('vue3-app 数据', e.detail.data);
    setMicroAppState(e.detail.data);
  }

  return (
    <div>
      <h1>vue3-app</h1>

      <button onClick={sendVue3AppData}>基座 => vue3-app</button>

      <p>子应用消息 {microAppState ? microAppState.msg : '无'}</p>
      <micro-app
        name='vue3-app'
        url='http://localhost:3002/'
        baseroute='/vue3-app'
        onDataChange={onDataChange}
      >
      </micro-app>
    </div>
  )
}

export default Vue3MicroApp;

