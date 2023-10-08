import { useEffect, useState } from "react";
import ProgrammeAll from "./ProgrammeAll";
import ProgrammeDetailsCard from "../ProgrammeDetails/ProgrammeDetailsCard";

// import ProgrammeAll from "./ProgrammeAll";


const Programme = () => {

    const [favorites , setFavorites] = useState([]);
    const [notFound , setNotFound] = useState(false);
    const [isShow , setIsShow] = useState(false);


    useEffect(() => {

        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
        
        if(favoriteItems){
            setFavorites(favoriteItems)
        }
        else{
            
            setNotFound("No Data Found");
        }




    } ,[])

    console.log(favorites);

    const handleRemove = () => {
        localStorage.clear()
        setFavorites([])
        setNotFound("No Data Found");
    }



    return (
        <div>
            {
                notFound ? <p className="flex justify-center items-center h-[80vh]">{notFound}</p> : <div>

                    {
                       favorites.length > 0 && <button onClick={handleRemove} className="px-5 bg-red-600 block mx-auto text-white font-bold p-2 mb-8">Deleted All Events</button> 
                    }
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5"> 
                    
                   {

                        isShow ? favorites.map(myProgramme => <ProgrammeDetailsCard key={myProgramme.id} myProgramme={myProgramme}></ProgrammeDetailsCard>)
                        : 

                        favorites.slice(0 , 3).map(myProgramme => <ProgrammeDetailsCard key={myProgramme.id} myProgramme={myProgramme}></ProgrammeDetailsCard>)


                   }
                   
                    
                     </div>

                    {
                        favorites.length > 2 &&  <button onClick={() => setIsShow(!isShow)} className="px-5 bg-blue-600 block mx-auto text-white font-bold p-2 mt-8"> {isShow ? "See Less" : "See More"} </button> 
                    }
                    
                    
                    
                    
                     </div>
            }
        </div>
    );
};

export default Programme;