import React, { ChangeEvent, useState } from 'react';

import 'antd/dist/antd.css';

import TextInput from '../components/textInput';
import InputDropdown from '../components/inputDropdown';
import UserGrid from '../components/UserGrid';

function SearchPage() {
    const [searchTypeTemp, setsearchTypeTemp] = useState("users");
    const selectChange = (value: string) => { 
      setsearchTypeTemp(value);
    }
  
    const [input, setInput] = useState("");
    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
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