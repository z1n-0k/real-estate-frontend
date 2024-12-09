import { useState } from "react";
import "./searchBar.scss"

const types = ["buy", "rent"];

const SearchBar = () => {

    const [query, setQuery] = useState({
        type:"buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    });

    const switchType = (val) => {
        setQuery((prev) => ({
            ...prev, type:val
        }));
    }

    return (  
        <div className="searchBar">
            <div className="type">
                {
                    types.map((type) => (
                        <button
                            className={query.type === type ? "active" : ""}
                            key={type}
                            onClick={()=>{
                                switchType(type);
                            }} 
                        >{type}</button>
                    ))
                }
            </div>
            <form action="">
                <input 
                    type="text" 
                    name="location" 
                    placeholder="City Location"
                />
                <input 
                    type="number" 
                    name="minPrice" 
                    placeholder="Min Price"
                    min={0}
                    max={10000000}
                />
                <input 
                    type="number" 
                    name="maxPrice"
                    min={0}
                    max={10000000} 
                    placeholder="Max Price"
                />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    );
}
 
export default SearchBar