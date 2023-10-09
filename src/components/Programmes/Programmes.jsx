/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import ProgrammeCard from "./ProgrammeCard";


const Programmes = ({programmes}) => {
    console.log(programmes);
    return (
        <div className="mt-32">
            <h1 className="text-3xl text-center">Our Services</h1> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
                {
                    programmes?.map(programme => <ProgrammeCard key-={programme.id} programme={programme}></ProgrammeCard> )
                }
            </div>
            
        </div>
    );
};

export default Programmes;