import {
  request
} from "@/apis/request";

/**
 * topList
 * @param {topgrossingapplications} data
 */
export const topList = ({ limit }) => {
  return request({
    method: "get",
    url: `/rss/topgrossingapplications/limit=${limit}/json`,
    headers: { 'Content-Type': 'application/json' }
  });
};


/**
* freeList
* @param {topfreeapplications} data
*/
export const freeList = ({ limit }) => {
  return request({
    method: "get",
    url: `/rss/topfreeapplications/limit=${limit}/json`,
    headers: { 'Content-Type': 'application/json' }
  });
};


/**
* freeList
* @param {topfreeapplications} data
*/
export const lookup = (data) => {
  return request({
    method: "get",
    url: `/lookup`,
    data,
    headers: { 'Content-Type': 'application/json' }
  });
};