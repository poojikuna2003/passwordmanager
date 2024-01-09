import {Component} from 'react'
import {v4} from 'uuid'
import PasswordList from '../PasswordList'
import './index.css'

class PasswordManager extends Component {
  state = {
    websiteName: '',
    userName: '',
    passwordName: '',
    websiteDetailsList: [],
    // isShowPassword: false,
    // searchInput: '',
  }

  renderPasswordListContainer = () => {
    const {websiteDetailsList} = this.state
    if (websiteDetailsList.length === 0) {
      return (
        <div className="no-password-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-passwords-image"
          />
        </div>
      )
    }
    return (
      <ul className="password-details-container-output">
        {websiteDetailsList.map(each => (
          <PasswordList key={each.id} passwordDetails={each} />
        ))}
      </ul>
    )
  }

  onAddPassword = event => {
    event.preventDefault()

    const {websiteName, userName, passwordName} = this.state

    const newPassword = {
      id: v4(),
      websiteName,
      userName,
      passwordName,
    }

    this.setState(prevState => ({
      websiteDetailsList: [...prevState.websiteDetailsList, newPassword],
      websiteName: '',
      userName: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({
      websiteName: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      passwordName: event.target.value,
    })
  }

  onChangeName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  render() {
    const {websiteName, userName, passwordName, websiteDetailsList} = this.state
    console.log(websiteName)
    console.log(userName)
    console.log(passwordName)

    return (
      <div className="app-container">
        <div className="app-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </div>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="image-el"
          />

          <form
            className="input-element-container"
            onSubmit={this.onAddPassword}
          >
            <h1>Add New Password</h1>
            <div className="input-website-details">
              <div className="input-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="logo"
                />
              </div>
              <div className="input-element">
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input"
                  onChange={this.onChangeWebsite}
                />
              </div>
            </div>

            <div className="input-website-details">
              <div className="input-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="user name"
                  className="logo"
                />
              </div>
              <div className="input-element">
                <input
                  type="text"
                  placeholder="Enter UserName"
                  className="input"
                  onChange={this.onChangeName}
                />
              </div>
            </div>

            <div className="input-website-details">
              <div className="input-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="logo"
                />
              </div>
              <div className="input-element">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input"
                  onChange={this.onChangePassword}
                />
              </div>
            </div>
            <button type="submit" className="btn-el">
              Add
            </button>
          </form>
        </div>

        <div className="password-details-container">
          <div className="nav-container">
            <div className="passwords-container">
              <h1 className="password-header">Your Passwords</h1>
              <div className="passwords-count">
                <p>{websiteDetailsList.length}</p>
              </div>
            </div>
            <div className="search-container">
              <div className="search-icon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-image"
                />
              </div>
              <div className="input-search-el">
                <input
                  type="search"
                  className="search-el"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <hr className="separator" />
          <div className="show-password-container">
            <input type="checkbox" id="checkboxEl" />
            <label htmlFor="checkboxEl">Show Passwords</label>
          </div>
          <div>{this.renderPasswordListContainer()}</div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
