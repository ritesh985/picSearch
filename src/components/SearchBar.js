import React from 'react';

class SearchBar extends React.Component{

    // uncontrolled Elements
    // onInputChange(event){   
    //     console.log(event.target.value);

    // }

    //Controlled
    state = {term:''};
    
    //To solve error of "Cannot read propety 'state' undefined"
    //Way 1 - Define constructor and bind function
    // constructor(){
    //     super();
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }

    //Way to MAke Defined onFormSubmit function as arrow function More frequently used way
    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.afterSearch(this.state.term);

    }

    //Way 3 - In form taf at onSubmit call function as a arrow functio as follows
    //<form onSubmit={event => onFormSubmit(event)}

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({term:e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;