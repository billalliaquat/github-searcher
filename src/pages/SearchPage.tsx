import React, { ChangeEvent, useState } from 'react';
import { debounce } from "lodash";
import 'antd/dist/antd.css';

import TextInput from '../components/textInput';
import InputDropdown from '../components/inputDropdown';
import UserGrid from '../components/UserGrid';

function SearchPage() {
    const [searchTypeTemp, setsearchTypeTemp] = useState("users");
    const [input, setInput] = useState("");
    
    const selectChange = (value: string) => { 
      setsearchTypeTemp(value);
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
      <UserGrid searchType={searchTypeTemp} searchKey={input}/>
      </div>      
    )
}

export default SearchPage;