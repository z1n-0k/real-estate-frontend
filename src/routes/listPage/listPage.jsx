import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import { listData } from "../../libraries/data";
import Map from "../../components/map/map";
import "./listPage.scss"

const ListPage = () => {

    const data = listData;
    return (
        <div className="listPage">
            <div className="listConainer">
                <Filter />
                <div className="wrapper">
                    {
                        data.map(item => (
                            <Card key={item.id} item={item}/>
                        )) 
                    }
                </div>
            </div>
            <div className="mapContainer">
                <Map items={data}/>
            </div>
        </div>
    );
}

export default ListPage;