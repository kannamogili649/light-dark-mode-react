import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  ChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  ChangeContent = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'Light Mode' : 'Dark Mode'
  }

  ChangeColor = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'dark-heading' : 'light-heading'
  }

  ContainerColor = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'content-div-dark' : 'content-div-light'
  }

  render() {
    const btnText = this.ChangeContent()
    const headingClr = this.ChangeColor()
    const containerClr = this.ContainerColor()

    return (
      <div className="container-div">
        <div className={`content-div ${containerClr}`}>
          <h1 className={headingClr}>Click to change mode</h1>
          <button onClick={this.ChangeMode} className="button" type="submit">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
