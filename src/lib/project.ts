import { ObjectType } from "typescript";
// Creating the type for the object
import project1 from "@/app/assets/pro1.png";
import project2 from "@/app/assets/pro2.png";
type objType = {
  obj_id: number;
  obj_value: string;
};
// creating the array of objects
let projectList: Array<objType> = [
  { obj_id: 1, obj_value: project1.src },
  { obj_id: 2, obj_value: project2.src },
  //   { obj_id: 3, obj_value: "Shubham" },
  //   { obj_id: 4, obj_value: "TutorialsPoint" },
  //   { obj_id: 5, obj_value: "TypeScript" },
];
export default projectList;
