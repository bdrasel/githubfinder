import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';


const Search = ({ setAlert }) => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
   
    const[text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === ''){
            alertContext.setAlert('This field is required!','danger');
        }else{
            githubContext.searchUsers(text);
            setText('');
        }
    };

    const onChange = (e) => setText( e.target.value )

        return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." value={text}  onChange={onChange} />
                    <input type="submit" value="Search" 
                    className="btn btn-dark btn-block" />
                </form>
                { githubContext.users.length > 0 && (
                    <button onClick={githubContext.clearUsers} className="btn btn-light btn-block">Clear</button>
                )}
            </div>
        )
}

export default Search
