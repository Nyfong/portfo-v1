import Link from "next/link";
import Image from "next/image";
import pro1 from "@/app/assets/pro1.png";
import projectList from "@/lib/project";
const CardProject = () => {
  return (
    <>
      {projectList.map((el, i) => (
        <Link key={i} href="#" className="group block ">
          <Image
            src={el.obj_value}
            width={100}
            quality={100}
            priority
            height={200}
            alt=""
            className="h-[250px] w-full object-cover sm:h-[350px] rounded-lg shadow-lg "
          />

          <div className="mt-3 flex justify-between text-sm">
            <div>
              <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                Small Headphones
              </h3>

              <p className="mt-1.5 text-pretty text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                nobis, quia soluta quisquam voluptatem nemo.
              </p>
            </div>

            <p className="text-gray-900">$299</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CardProject;
