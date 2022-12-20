import axios from "axios";

const request = axios.create({
  baseURL: "http://api.imooc.hybrid.lgdsunday.club",
  params: {
    token: "595fe950-7ebd-11ed-aa1f-dd279271aa3a",
  },
});

export default request;
