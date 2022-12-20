import { environment } from "src/environments/environment";

export const APIURL = {
    Login: environment.BaseUrl + 'user/login',
    bestSelling: environment.BaseUrl + '/bestSelling',
    ourCollection: environment.BaseUrl + '/ourCollection',
    shopByFactory :environment.BaseUrl + '/shopByFactory',
    shopByCategory :environment.BaseUrl + '/shopByCategory',
    shopByStyle :environment.BaseUrl + '/style'
}