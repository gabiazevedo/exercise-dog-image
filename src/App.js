import React from 'react';
import './App.css';
import Loading from './Loading';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      dogs: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          dogs: data.message,
        });
        console.log(data.message);
      });
  }

  render() {
    const { dogs, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div>
        {dogs.map((dog, index) => (
          <div key={ index }>
            <img src={ dog } alt="Doguinho" />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
