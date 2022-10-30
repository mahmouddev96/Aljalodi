
import { secureAxiosRequest } from "../../../Services/api/api";
export const Categories_Api = async (Param, isArabic) => {

    const endpoint = {
        aboutana: `api/SitesApis/GetAllCategories`
    }
    let url = endpoint.aboutana;

  
    const response = await secureAxiosRequest(url, 'GET')
    return response
}