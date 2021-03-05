import PropTypes from 'prop-types';

function App() {
  const profiles = [
    {name: "Kei", age: 24},
    {name: "Messi", age: 32},
    {name: "Makoto", age: 37},
    {name: "Kazu", age: "53"},
    {name: "NoUser"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index)=>{
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  );
}
const User = (props) => {
  return <div>Hi, I'm {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name : PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
