import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiList, sushiEaten}) {
  const [sushiIndex, setSushiIndex] = useState(0);
  const renderedSushi = sushiList
    .slice(sushiIndex, sushiIndex + 4)
    .map(sushi => <Sushi 
      sushi={sushi} 
      key={sushi.id} 
      sushiEaten={sushiEaten} 
    />)

  function handleClickMore() {
    setSushiIndex( () => (sushiIndex + 4) % sushiList.length )
  }

  return (
    <div className="belt">
      {renderedSushi}
      <MoreButton handleClickMore={handleClickMore} />
    </div>
  );
}

export default SushiContainer;
