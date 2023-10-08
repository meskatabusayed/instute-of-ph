import swal from "sweetalert";


const ProgrammeDetailsCard = ({myProgramme}) => {

    const {id , image, card_title, card_description , price} = myProgramme || {}

    const handleAddToFavorite = () => {

        const addedFavoritesArray = []

        
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))

        if(!favoriteItems){
            addedFavoritesArray.push(myProgramme)
            localStorage.setItem('favorites' , JSON.stringify(addedFavoritesArray))
            swal("Good job!", "Programme Added successfully!", "success");
        }
        else{

            const isExist = favoriteItems.find(programme => programme.id == id)
            console.log(isExist);

            if(!isExist) {
            addedFavoritesArray.push(...favoriteItems , myProgramme)
            localStorage.setItem('favorites' , JSON.stringify(addedFavoritesArray))
            swal("Good job!", "Programme Added successfully!", "success");
            }
            else{
                swal("Sorry!", "Already Axist!", "error");
            }



            
        }
    }

   

    return (
        <div className="flex justify-center items-center ">
             <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      {card_title}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {card_description}
    </h4>
    
    <a className="inline-block" href="#">
      <button
      onClick={handleAddToFavorite}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add Favorites
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default ProgrammeDetailsCard;