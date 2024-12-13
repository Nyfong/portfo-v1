import Link from "next/link";
import Image from "next/image";
import pro1 from "@/app/assets/pro1.png";
const CardProject = () => {
  return (
    <>
      <Link href="#" className="group block border-2 ">
        <Image
          src={pro1}
          alt=""
          className="h-[250px] w-full object-cover sm:h-[350px] rounded-lg shadow-lg opacity-70 hover:opacity-100"
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
    </>
  );
};

export default CardProject;
