
import { secureAxiosRequest } from "../../../Services/api/api";
export const Details_Api = async (Param, isArabic) => {

    const endpoint = {
        Details: `api/SitesApis/GetAnItemFull?ID=`
    }
    let url = endpoint.Details+Param;

  
    const response = await secureAxiosRequest(url, 'GET')
    return response
}