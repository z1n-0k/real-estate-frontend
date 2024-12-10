import "./list.scss"
import Card from "../../components/card/Card"
import {listData} from "../../libraries/data"

const List = () => {
    return (
        <div className="list">
            {listData.map(item=> (
                <Card item={item} key={item.id}/>
            ))}
        </div>
      );
}
 
export default List;