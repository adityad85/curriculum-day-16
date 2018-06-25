import React, {
  Component,
  Fragment,
} from 'react';

import Post from './components/Post';
import './App.css';

const API = 'http://localhost:3001/posts/1';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    fetch(API, {
      headers: {
        'pesto-password': 'darth vader',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.data);
        // this.setState({
        //   posts: response.data,
        // }
      });
  }

  render() {
    return (
      <div >
        <h2 > Posts </h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick}>Previous</button>
        <button onClick={this.handleNextClick}>Next</button>
        <div>
          {this.state.posts.map((post) => {
          return (
            <Fragment key={post.id}>
              <Post post={post} />
              <hr />
            </Fragment>
          );
        })
      }
        </div>
      </div >
    );
  }
}

export default App;
