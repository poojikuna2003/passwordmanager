import './index.css'

const PasswordList = props => {
  const {passwordDetails} = props
  const {websiteName, userName, passwordName} = passwordDetails
  return (
    <li className="list-elements">
      <div className="profile-container-pic">
        <p>{websiteName[0].upperCase()}</p>
      </div>
      <div>
        <p>{websiteName}</p>
        <p>{userName}</p>
        <p>{passwordName}</p>
      </div>
    </li>
  )
}

export default PasswordList
