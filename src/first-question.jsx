import React, { useState } from "react";

export const FirstQuestion = () =>{
    const fruits = [
        "apple", 
        "Apricot",
        "Banana", 
        "Orange",
        "grapes",
        "cherries",
        "cantelope",
        "pineapple",
        "Fig"
    ];

    const [fruitsData, setFruitsData] = useState(fruits);
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e)=>{
        setSearchTerm(e.target.value);
    }

    const fruitsDataFiltered = fruitsData.filter((fruit) =>
        fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    

    return (
        <div>   
            <input type="text" onChange={handleInputChange} placeholder="Search here ..."></input>
            {fruitsDataFiltered.map((fruit)=>{
                return <p>{fruit}</p>
            })}
        </div>
    )
}