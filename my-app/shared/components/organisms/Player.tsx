interface Props {
    videoId : string;
}

const Player = ({videoId}: Props) => {
  return (
    <div className="w-full  mt-[50px] lg:mt-[100px]">
      <div className="relative w-full pt-[42%]"> 
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Player;
