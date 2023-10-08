import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProgrammeDetailsCard from "./ProgrammeDetailsCard";


const ProgrammeDetails = () => {

    const [myProgramme , setMyProgramme] = useState({});

    const {id} = useParams();
 
  

    const programmes = useLoaderData();
   

    useEffect(() => {
        const findProgramme = programmes?.find(newProgramme => newProgramme.id == id)
     
        setMyProgramme(findProgramme);

    } , [id , programmes])

    console.log(myProgramme);


    return (
        <div>
          <ProgrammeDetailsCard myProgramme={myProgramme}></ProgrammeDetailsCard>
        </div>
    );
};

export default ProgrammeDetails;