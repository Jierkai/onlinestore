import Mock from "mockjs";
import banner from "./banner.json";

Mock.mock("/mock/fnlist", { code: 200, data: banner });
