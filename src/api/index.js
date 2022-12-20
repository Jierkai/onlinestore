import request from "@/utils/request";
import mockRequest from "@/utils/mockRequest";

export const swiper = () =>
  request({
    url: "/swiper",
    method: "get",
  });
export const actives = () =>
  request({
    url: "/activitys",
    method: "get",
  });

export const quick = () =>
  request({
    url: "/seconds",
    method: "get",
  });
export const fnlist = () =>
  mockRequest({
    url: "/fnlist",
    method: "get",
  });
