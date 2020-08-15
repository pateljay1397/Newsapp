import React from 'react';
import './App.css';
import { getBitcoinArticles } from "./api";

class App extends React.Component{
state= {
articles: [],
apiError: "" 
};
async componentDidMount() {
  try {
    const response = await getBitcoinArticles();
    this.setState({ articles: response.articles });
  } catch (error) {
    this.setState({ apiError: "Could not find any articles" });
  }
} 
  render () {
    return <div>Write your code here for further implementaion</div>;
    }
}

export default App;
