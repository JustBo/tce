import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Main extends Component {

  componentDidMount() {
    axios.get('/api/users')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Main Component</div>
                            <div className="card-body">
                                I'm an Main component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
