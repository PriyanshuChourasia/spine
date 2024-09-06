import { useEffect, useState } from "react"
import { IUserResponseInterface } from "./interface/UserResponseInterface";
import axios from "axios";


function App() {

  const [userData, setUserData] = useState<IUserResponseInterface[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users').then((res) => {
      console.log(res);
      setUserData(res.data);
    }).catch((error: unknown) => {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    });

  }, []);


  return (
    <>

      {
       userData.length !=0 && userData?.map((item) => (
          <UserGrid name={item.name} age={item.age} key={item.id} />
        ))
      }
    </>
  )
}


interface Usergrid{
  name:string;
  age?:number;
}


export const UserGrid: React.FC<Usergrid> = ({name,age}) =>{
  return(
   <>
    <p>{name}</p>
    <p>{age}</p>
   </>
  )
}

export default App
