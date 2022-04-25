import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';

import './UserGrid.css';

import { getAllUsers } from '../services/UserService';

const { Meta } = Card;

interface IsearchInputProps {
    searchKey: string;
    searchType: string;
}

const UserGrid : React.FC<IsearchInputProps> = ({searchKey, searchType}) => {

  const [userList, setuserList] = useState([]);
    let mappedData:any = [];
  
    useEffect(() => {
  
      if(searchKey.length >= 3){
        console.log("get users");
        let result = getAllUsers(searchKey);
        result.then( (data)=> {
  
        let rowCounter = 0;
  
        data.items.map((data: any, index: number) => {
            if(index % 4 == 0) {
              if(index > 0) {
                rowCounter++;
              }
            mappedData[rowCounter] = [];
            }
            mappedData[rowCounter].push(data);
        });

        setuserList(mappedData);
        })
        
      }
    }, [searchKey])
    
    console.log(userList);

    return (

        <div className='grid-div'>
        {
            
          userList.map((data:any, index:any) => {
        return <Row>
            {
            data.map((colData:any, index:any) => {
            return <Col span={6}>
            <Card className='grid-item'
                hoverable
                cover={
                <img
                    alt="User Logo"
                    src={colData.avatar_url}
                />
                }
            >
            <Meta title={colData.login} description={colData.html_url} />
            {/* <div className="additional">
        <p className="price">Price: 20$</p>
        <p>Author: John Doe</p>
        </div> */}
            </Card>
            </Col>
            })   
            }
        </Row>
        })
    }
    </div>
        // <div className='userTile'>
        //   <span className='helper'></span>
        //   <img className='dp' src='https://avatars.githubusercontent.com/u/1?v=4'></img>
        //   <div className='userInfo'>
        //     <h2 className='userName'>tom</h2>
        //     <a className='userProfile' href="https://www.w3schools.com/">Visit W3Schools.com!</a>
        //   </div>
        // </div>
    );
    
}

export default UserGrid;