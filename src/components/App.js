import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [budget, setBudget] = useState(100);

  function sushiEaten(id, price) {
    if(budget-price >= 0) {
      setSushiList(sushiList.map(sushi => id === sushi.id ? {...sushi, isEaten: true} : sushi))
      setBudget(budget-price)
    }
  }

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setSushiList(data);
    });
  }, []);

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} sushiEaten={sushiEaten} />
      <Table budget={budget} plates={sushiList.filter(sushi => sushi.isEaten)} />
    </div>
  );
}

export default App;
