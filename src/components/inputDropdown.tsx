import React from 'react';
import {Select} from 'antd';
import 'antd/dist/antd.css'

import './inputDropdown.css';

const { Option } = Select;
const searchOptions = ['Users', 'Repositories'];

interface IsearchInputChildProps {
    onChange: (value:string) => void
}

const InputDropdown: React.FC<IsearchInputChildProps> = ({onChange}) => {

    return (
            <Select className='Search-dropdown' defaultValue={'Users'} onChange={onChange}
                showSearch
                placeholder="Search to Select"
                optionFilterProp="children"
            >
            {
                searchOptions.map((sOption, index) => {
                    return <Option key={index} value={sOption}>{sOption}</Option>
                })
            }
            </Select>
    );
}

export default InputDropdown;

