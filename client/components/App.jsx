import React from 'react'
import { getFilm } from '../api'

class App extends React.Component {
  state = {
    film: ''
  }

  componentDidMount() {
    getFilm()
      .then(res => {
        this.setState({
          film: res.body.title
        })
      })
      .catch(err => this.setState({ film: 'https://i.gifer.com/XyGe.gif' }))
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

        <h2>{film.title}</h2>
      </React.Fragment>
    )
  }
}

export default App
