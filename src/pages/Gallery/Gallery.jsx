const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
      <div className=" w-96 image-full">
        <figure>
          <img
            src="https://i.ibb.co/vvFqCj5/D1.jpg"
            alt="xsss"
          />
        </figure>
        </div>

        <div className="w-96  image-full">
        <figure>
          <img
            src="https://i.ibb.co/YNN1GFj/t2.jpg"
            alt="sww"
          />
        </figure>
        
      </div>
      <div className=" w-96  image-full">
        <figure>
          <img
            src="https://i.ibb.co/LC1xSBh/t3.jpg"
            alt="ww"
          />
        </figure>
        
      </div>

      <div className=" w-96  image-full">
        <figure>
          <img
            src="https://i.ibb.co/PrJhx4B/event-registration-3441960-1280.jpg"
            alt="ww"
          />
        </figure>
        
      </div>
      
    </div>
  );
};

export default Gallery;
