import 'jest-styled-components'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

const env_setup = () => {
  process.env.NODE_ENV = 'test'
  process.env.APP_ENV = 'test'
  process.env.BABEL_ENV = 'test'
}

module.exports = env_setup
