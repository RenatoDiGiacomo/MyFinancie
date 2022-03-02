import React from "react"

import SectionCardStyle from './style/SectionCardStyle'

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
      <SectionCardStyle>
      {data && data.map((list: IDataBase) => (
          <div id="card">
            <div key={list.id}>
              <h1>{list.title}</h1>
              <div>{list.description}</div>
              <div>
                {list.products && list.products.map((product) => (
                  <div>{product.name}| {product.price}</div>

                ))}
              </div>
            </div>
          </div>
      ))}
      </SectionCardStyle>

    </>
  )
}

export default ListComponents