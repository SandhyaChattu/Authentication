import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Login from './components/LoginForm'

const App = () => (
  <div>
    <Header />

    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />

      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
