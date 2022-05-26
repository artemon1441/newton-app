import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {

  const [dataList, setDataList] = useState([]);
  const [chosenList, setChosenList] = useState([]);
  const [chosenElement, setChosenElement] = useState(0);

  function getDataList() {
    fetch('https://picsum.photos/v2/list', {
    method: 'GET',
    mode: 'cors',
    }).then((response)=> {
    return response.json()
    }).then((data)=> {
        setDataList(data)
    })
    console.log(dataList)
}   

useEffect(() => {
    getDataList()
}, []);




function cardsRender(array){
  return array.map((e, index)=>{
      return(
          <Card
              key={index}
              i={index}
              name={e.author}
              width={e.width}
              height={e.height}
              url={e.download_url}
              chosen={chosenList}
              setChosen={setChosenList}
          />
      )
  })
}

function paginationRender(){
  return dataList.map((e, index)=>{
    return(
        <div className="number" onClick={()=> setChosenElement(index)}>
          {index + 1}
        </div>
    )
})
}

function chosenHandler(){
  let tempArr = [...chosenList]
    tempArr.push(dataList[chosenElement])
    setChosenList(tempArr)
}


  return (
    <div className="App">
      <h2>Список избранного:</h2>
      <div className="container">
      {cardsRender(chosenList)}
      <div className="line"></div>
      </div>
      <div className='container'>
        {/* {cardsRender(dataList)} */}
        <div className="pagination-block">
          <div className="pagination-block__img">
          {dataList.length > 1 ? <img src={dataList[chosenElement].download_url} alt="Тут должна быть картинка" /> : null}
          </div>
          <div className="description">
            <div className="pagination-block__name">{dataList[chosenElement].name}</div>
            <button onClick={()=> chosenHandler()} >В избранное!</button>
          </div>
          
        <div className="number-wrapper">
        {paginationRender()}
        </div>
        
        </div>
    </div>
    </div>
  );
}

export default App;
