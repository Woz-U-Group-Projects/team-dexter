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
 
      <div class= "s003">
  <form>
    <div class=" inner-form">
      <div class="input-field first-wrap">
        <div class="input-select">
          <ul>
          <li><a href=  "https://www.allfreeknitting.com/Knit-Afghans-and-Blankets">Knitting Blanket Patterns</a></li>
          <li><a href= "https://www.allfreecrochet.com/Crochet-Afghan-Patterns">Crochet Blanket Patterns</a></li>
          <li><a href= "hhttps://www.allfreeknitting.com/Knit-Scarves">Knitting Scarf Patterns</a></li>
          <li><a href= "https://www.allfreecrochet.com/Scarves">Crochet Scarf Patterns</a></li>
          <li><a href= "https://www.allfreeknitting.com/Knitted-Sweaters">Knitting Clothing Patterns</a></li>
          <li><a href= "https://www.allfreecrochet.com/Sweaters">Crochet Clothing Patterns</a></li>
          </ul>
        </div>
      </div>
      <br></br>
      <div>
        <form class="example" action="/action_page.php">
        <input type="text" placeholder="Keywords.." name="keywords"/>
        <button class="btn-search" type="button"><a href= "https:www.google.com">Search</a></button>
        </form>
     </div>
      <br></br>
      <form action="/action_page.php">
         <label for="img">Select image:</label>
         <br></br>
         <input type="file" id="img" name="img" accept="image/*"/>
         <br></br>
         <form action="/action_page.php2" method="post">
         <button class="btn-upload" type="button">Upload</button>
         </form>
      </form>
    </div>
  </form>
  </div>
</div>
    );
  }
    }

export default Search;
