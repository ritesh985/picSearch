import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList'; 

class App extends React.Component{
    state = {Images:[]};
    
    onSearchSubmit =async (term) =>{
        // console.log(term);
        const responses = await unsplash.get('/search/photos',{
            params:{query:term},
        });
        //console.log(responses.data.results);
        this.setState({Images:responses.data.results});
    }
    //We can use .then also instead of async and await
    render(){
        return(
            <div className="ui container" style={{marginTop:'20px'}}>
                <SearchBar afterSearch={this.onSearchSubmit} />
                {/* Found: {this.state.Images.length} images */}
                <ImageList images = {this.state.Images} />
            </div>
        );
    }
}
export default App;