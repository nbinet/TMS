import { useState } from "react";
import { MapBuilding } from "../../MapBuilding/MapBuilding";

function List(props) {
    const { build } = props;
    const [complete, setComplete] = useState(false);
    // const [selectedArticles, setSelectedArticles] = useState({});  
    function handleChange(event) {
      const completed = event.target.completed
      setComplete(completed);
      const array = build.map((bui) => [bui.id, completed]);
      (new Map(array));
    }
  
    return (
      <div>
        {build.map((bui) => <MapBuilding
          build={bui}
          key={bui.id}
          // selected={Boolean(selectedArticles[art.id])}
          complete={Boolean(build.get(bui.id))}
        />)}
        <div>
          <span className="Building"  onLoad={handleChange}/>
        </div>
      </div>
    );
  }
  
  export default List;
  