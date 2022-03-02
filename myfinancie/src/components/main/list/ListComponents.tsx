import React from "react"
import CardListComponent from "./CardListComponent";
import { AppService, IDataBase } from "./IDataBase"

function ListComponents() {
  const [data, setData] = React.useState<any>(null);
  const appService = new AppService();




  React.useEffect(() => {
    const getDataAll = async (data: IDataBase) => {
      const getData = await appService.getData();
      setData(getData)
    }
    getDataAll(data)

  }, [])

  return (
    <>
      <h1>ListComponents</h1>
      <hr />
      <CardListComponent name="test"/>
      <div>
        {data && data.map((list: IDataBase) => (
          <ul>
            <li key={list.id}>{list.title}
              <li>{list.description}</li>
              <ul>
                {list.products && list.products.map((product) => (
                  <li>{product.name}| {product.price}</li>
                  
                ))}
              </ul>
            </li>
          </ul>
        ))}
      </div>
    </>
  )
}

export default ListComponents