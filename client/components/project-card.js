import Link from "next/link";
import TimeAgo from "react-timeago";

const ProjectCard = ({ data, isDraft }) => {
  const { title, slug, time } = data;
  // blocks: [{…}, {…}, {…}]
  // slug: "first-blog-dS69"
  // time: "2022-06-13T20:17:09.486Z"
  // title: "Fırst Blog"
  // userId: "629914497ea5eec256f4eeb3"
  // version: "2.24.3"
  // __v: 0
  // _id: "62a79b851d3b3be7cbc94b8f"

  return (
    <Link href={"/projects/" + slug}>
      <div className="border-2 rounded-md p-4  hover:bg-neutral-100 active:bg-neutral-200 outline-none select-none cursor-pointer">
        <div className="flex justify-between ">
          <h1 className="font-medium">{title}</h1>
          <div className="text-slate-500">
            <TimeAgo className="text-sm" date={time} />
          </div>
        </div>
        <div className="text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
          mi mi...
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;