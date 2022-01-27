import microApp from "@micro-zoe/micro-app";

const Vue3MicroApp = () => {
  const sendVue3AppData = () => {
    microApp.setData('vue3-app', {
      name: 'vue3-app'
    })
  }

  return (
    <div>
      <h1>vue3-app</h1>
      <micro-app name='vue3-app' url='http://localhost:3002/' baseroute='/vue3-app'></micro-app>
      <button onClick={sendVue3AppData}>发数据给 vue-app</button>
    </div>
  )
}

export default Vue3MicroApp;

