
import { secureAxiosRequest } from "../../../Services/api/api";
export const Search_Api = async (Param) => {

    const endpoint = {
        SubCategories: `api/SitesApis/GetAllItemsFull?Category=`
    }
    let url = endpoint.SubCategories+Param.Category+'&SubCategory='+Param.SubCategory+'&SortBy='+Param.SortBy+'&PageNo='+Param.PageNo+'&SearchTerm='+Param.SearchTerm;

  console.log(url)
    const response = await secureAxiosRequest(url, 'GET')
    return response
}