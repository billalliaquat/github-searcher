import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com/search'
})

export async function getAllUsers(userName:string) {

    const { data } = await api.get('/users?q='+userName);
    // console.log(data.items);
    // console.log("Service is array : " + Array.isArray(data.items));

    return data;

    // const response = await api.get('/users?q='+userName).then( res => {
        // console.log(res.data.items);
        // result = res.data.items;
        // let rowCounter = 0;
        // const mappedData: any = [];

        // res.data.items.map((data:any, index:number) => {
        // if(index % 4 == 0) {
        // rowCounter++;
        // mappedData[rowCounter] = [];
        // }
        // mappedData[rowCounter].push(data);
        // });
    //     tempArr.push(1);
    //     tempArr.push(2);
    // })
    
    // return tempArr;
}
