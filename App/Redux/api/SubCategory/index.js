
import { secureAxiosRequest } from "../../../Services/api/api";
export const SubCategory_Api = async (Param, isArabic) => {

    const endpoint = {
        SubCategories: `api/SitesApis/GetSubCategoriesbyCategory?CategoryID=`
    }
    let url = endpoint.SubCategories+Param;

  
    const response = await secureAxiosRequest(url, 'GET')
    return response
}