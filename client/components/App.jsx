import React from 'react'
import api from '../../server/api'

class App extends React.Component {
  state = {
    film: ''
  }

  componentDidMount () {
    api.getFilm()
      .then(newFilm => {
        this.setState({
          film: newFilm
        })
      })
  }

  handleClick = () => {
    const film = this.state.film

    this.setState({ film })
  }

  render() {
    const { film } = this.state
     
    return (
      <React.Fragment>
        <h1>I want to watch...</h1>

        <button onClick={this.handleClick}>Choose</button>

        {film && (<h2>film.original_title</h2>)}
      </React.Fragment>
    )
  }
}

export default App
