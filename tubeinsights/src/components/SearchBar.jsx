import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

class SearchBar extends React.Component {
    
    state = {
        term: ''
    }

    props = {
        placeholder: 'Enter Channel Name',
        searchBarWidth: '100%',
    }
    handleChange = event => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state.term);
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} sx={{alignItems: 'center', alignContent: 'center', textAlign: 'center'}}>
                <Box sx={{ alignItems: 'center', alignContent: 'center', textAlign: 'center'}}>
                    
                    <Input
                        placeholder={this.props.placeholder}
                        sx={{
                            width: this.props.searchBarWidth, 
                            color: 'rgba(0, 0, 0, 0.6)', 
                            fontSize: '1.1rem', 
                            ':before': { borderBottomColor: '#c20101' },
                            ':hover' : { borderBottomColor: '#c20101' , borderBottomWidth: '2px' },
                            ':after': { borderBottomColor: '#c20101' }
                        }}
                        onChange = {this.handleChange}
                        value = {this.state.term}
                    />
                    <Button type="submit" variant="contained" sx={{ marginLeft: '10px', backgroundColor: '#c20101', color: 'white' }}>
                        <SearchIcon />
                    </Button>
                    
                </Box>
            </form>
            
        )
    }   
}

export default SearchBar;

