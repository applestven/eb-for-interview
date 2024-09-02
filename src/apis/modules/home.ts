import request from "@/apis/request";

/**
 * 登录
 * @param {topgrossingapplications} data
 */
export const topList = ({ limit }: { limit: number }) => {

  return request({
    method: "get",
    url: `/rss/topgrossingapplications/limit=${limit}/json`,
    headers: { 'Content-Type': 'application/json' }
  });
};


/**
* 
* @param {topfreeapplications} data
*/
export const freeList = ({ limit }: { limit: number }) => {

  return request({
    method: "get",
    url: `/rss/topfreeapplications/limit=${limit}/json`,
    headers: { 'Content-Type': 'application/json' }
  });
};