
import Count from './components/Count'
// import TodoList from './components/TodoList'
import ListNumber from './components/b2/ListNumber'
import LightDark from './components/b3/LightDark'
import ListMode from './components/b4/ListMode'
import Menu from './components/b5/Menu'
import LanguageSlice from './components/b6/LanguageSlice'
import User from './components/b7/User'


export default function App() {
  return (
    <div>
      <Count></Count>
      {/* <TodoList></TodoList> */}
      <ListNumber></ListNumber>
      <LightDark></LightDark>
      <ListMode></ListMode>
      <Menu></Menu>
      <LanguageSlice></LanguageSlice>
      <User></User>
    </div>
  )
}
