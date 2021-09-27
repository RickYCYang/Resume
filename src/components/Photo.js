import myPhoto from "../assets/images/rick.jpg";

const Photo = () => {
  return (
    <div className="bg-pic-coding flex flex-col justify-center items-center bg-no-repeat w-100 h-170 bg-cover bg-center py-4 -mx-4">
      <img
        src={myPhoto}
        className="w-32 h-32 object-cover rounded-full border-2 border-green-900 dark:border-green-200 mb-2"
      />
      <h1 className="font-bold text-lg ">楊元齊 Rick</h1>
    </div>
  );
};

export default Photo;
