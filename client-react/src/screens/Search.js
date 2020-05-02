import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: [] };
    this.searchName = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/tasks";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    // let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ search: response.data }));
  };

  addSearch = () => {
    let url = "http://localhost:8080/tasks";
    axios.post(url, { name: this.searchName.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.searchName.current.value = "";
    });
  };

  updateSearch = (id) => {
    let url = "http://localhost:8080/tasks/" + id + "/complete";
    axios.put(url, { searchid: this.id, isComplete: this.isComplete }).then(response => {
      this.getData();
    });
  };
  deleteSearch = (id) => {
    let url = `http://localhost:8080/tasks/${id}/delete`;
    axios.delete(url, { searchid: this.id}).then(response => {
      console.log(response)
    });
    
  };

  render() {
    return (
    <div>
      <h1>inStitches Pattern Directory</h1>
      <p>Welcome to our Pattern Directory Page</p>
          <select data-trigger name="choices-single-defaul"/>
            <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for Category.."/>
              <ul id="myUL">
                  <li><a href="#">Category</a></li>
                  <li><a href="#">Knitting Blanket Patterns</a></li>
                  <li><a href="#">Crochet Blanket Patterns</a></li>
                  <li><a href="#">Knitting Scarf Patterns</a></li>
                  <li><a href="#">Crochet Scarf Patterns</a></li>
                  <li><a href="#">Knitting Clothing Patterns</a></li>
                  <li><a href="#">Crochet Clothing Patterns</a></li>
                  </ul>
            <div class="input-field second-wrap">
              <input id="search" type="text" placeholder="Enter Keywords?"/>
              <input ref={this.searchName} />
            <button type="button" className="btn btn-primary" onClick={this.addSearch}>add</button>
          <ul>
            {this.state.search.map(p => (
              <li key={p.searchid}>
                {p.name} : { p.complete ? "complete" : "not complete" } <button type="button" className="btn btn-success">Complete</button><button type="button" className="btn btn-danger">Delete</button>
              </li>
            ))}
          </ul>
            <div class="input-field thrid-wrap">
              <button class="btn-search" type="button">Search</button>
            </div>
          </div>
      </div>
    );
      }
    }

export default Search;
