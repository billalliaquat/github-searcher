import React, { ChangeEvent, useState, useEffect } from 'react';
import { debounce } from "lodash";
import 'antd/dist/antd.css';

import TextInput from '../components/textInput';
import InputDropdown from '../components/inputDropdown';
import UserGrid from '../components/UserGrid';
import RepoGrid from '../components/RepoGrid';

function SearchPage() {
    const [searchType, setsearchType] = useState("Users");
    const [input, setInput] = useState("");
    
    
  useEffect(() => {
    console.log("input type changed : " + searchType);
  }, [searchType]);
    
    const selectChange = (value: string) => { 
      setsearchType(value);
    }
    const debouncedSearch = debounce(async (criteria) => {
      setInput(criteria);
    }, 500);

    const inputChange = async (e: ChangeEvent<HTMLInputElement>) => {
      debouncedSearch(e.target.value);
    }

    return (
      <div>
      <TextInput onTextChange={inputChange} />   
      <InputDropdown onChange={selectChange} />  
      {
      (searchType == "Users") ? <UserGrid searchKey={input}/> : <RepoGrid searchKey={input}/>
      }
      </div>      
    )
}

export default SearchPage;