import ShareIcon from "../../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
  return (
    <div className="m-3 p-4 bg-white rounded-md shadow-md border border-gray-200 max-w-72">
      <div className="flex justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="text-gray-500">
            <ShareIcon />
          </div>
          <span>Project ideas</span>
        </div>
        <div className="flex items-center">
          <div className="pr-4 text-gray-500">
            <a href={link} target="_blank">
              {" "}
              <ShareIcon />
            </a>
          </div>
          <div className="text-gray-500">
            {" "}
            <ShareIcon />
          </div>
        </div>
      </div>
      <div className="pt-4">
        {type === "youtube" && (
          <iframe
            className="w-full"

            // "https://www.youtube.com/embed/s9HIgo6_2K4?si=ixCbkEQZMBlZff8i"
            
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
