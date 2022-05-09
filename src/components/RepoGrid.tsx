import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';

import './UserGrid.css';

import { getRepos } from '../services/UserService';

const { Meta } = Card;

interface IsearchInputProps {
    searchKey: string;
}

const RepoGrid : React.FC<IsearchInputProps> = ({searchKey}) => {

  const [repoList, setrepoList] = useState([]);
  let mappedData:any = [];
  
  useEffect(() => {
  
    if(searchKey.length >= 3) {
      let result = getRepos(searchKey);
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
        setrepoList(mappedData);
      })

      console.log(mappedData);

    }
    else{
      setrepoList([]);
    }
    }, [searchKey])
    
  return (
    <div className='grid-div'>
    {
      repoList.map((data:any, index:any) => {
        return <Row>
        {
          data.map((colData:any, index:any) => {
          return <Col span={6}>
          <Card className='grid-item'
            hoverable
            style={{ backgroundColor: '#f0f2fa'}}
          >
          <Meta title={colData.name} description={colData.html_url} />
          {
            <div className="additional">
            <p>Owner : <strong>{colData.owner.login}</strong></p>
            <p>Stars : <strong>{colData.stargazers_count}</strong></p>
            <p>Open Issues : <strong>{colData.open_issues}</strong></p>
            <p>Score : <strong>{colData.score}</strong></p>
            </div>
          }
          </Card>
          </Col>
          })   
        }
      </Row>
      })
    }
    </div>
  ); 
}

export default RepoGrid;