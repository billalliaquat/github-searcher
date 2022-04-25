import React, { ChangeEvent } from 'react';
import {Input} from 'antd';
import 'antd/dist/antd.css'

import './textInput.css';

interface IInputTextProps {
  onTextChange: (value:ChangeEvent<HTMLInputElement>) => void
}

const TextInput : React.FC<IInputTextProps> = ({onTextChange}) => {
    return (
        <Input className='Search-input' placeholder="Enter input" allowClear onChange={onTextChange} />
      );
}


export default TextInput;
