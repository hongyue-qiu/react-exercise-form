import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name:"",
    gender:"Male",
    description:"",
  }
  handleFeidChange = (filed,e) =>{
    this.setState({
      [filed]:e.target.value
    })
  }
  submit = (e) =>{
  e.preventDefault;
  alert(`your name is ${this.state.name} and gender is ${this.state.gender} and description is ${this.state.description}`)
  }
  render() {
    return (
      <form>
        <h1>My Profile</h1>
        <div>
          <div className="row">
          <label htmlFor="name">Name</label>
          <input type="text"
                 placeholder="Your name"
                 value={this.state.name}
                 onChange={(e) => this.handleFeidChange("name", e)}
                 id="name"/>
          </div>
          <div className="row">
          <label htmlFor="gender">Gender</label>
          <select value={this.state.gender}
                  onChange={(e) => this.handleFeidChange("gender", e)}
                  id="gender">
            <option>Male</option>
            <option>Female</option>
          </select>
          </div>
          <div className="row_description">
          <label htmlFor="description">Description</label>
          <textarea value={this.state.description}
                    placeholder="Description about yourself"
                    onChange={(e) => this.handleFeidChange("description", e)}
                    id="description">
          </textarea>
          </div>

          <input type="checkbox"
                 onChange={(e) => this.handleFeidChange("check", e)}
                 id="check"/>
          <p className="option">I have read the term of conduct</p>
        </div>
        <input
            className="submits"
            disabled={!this.state.name || !this.state.description }
            type="submit" value="Subimit"
            onClick={(e)=> this.submit(e)}/>
      </form>
    );
  }
}

export default MyProfile;


