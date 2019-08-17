import {Action} from "redux";
import {IAppMessage} from "./reducerApp";
import {IUserInfoAuth} from "../../customTypes/IUserInfo";
import {ICompanyInfo} from "../../customTypes/ICompanyInfo";

export enum TypeActionApp {
    LOGIN_REQUEST = "App > Login > Request",
    LOGIN_RESPONSE = "App > Login > Response",
    LOGIN_FAILED = "App > Login > Failed",

    SET_MESSAGE = "App > Message > Set",
    AUTO_CLEAR_MESSAGE = "App > Message > AutoClear",
    REMOVE_MESSAGE = "App > Message > Remove",
}

export interface IActionApp extends Action{
    isLoggedIn?: boolean;
    messageInfo?: Array<IAppMessage>;
    messageId?: number;
    userInfo?: IUserInfoAuth;
    companyInfo?: ICompanyInfo;
    type: TypeActionApp;
}

export const actionAppLoginRequest = (): IActionApp => ({
    type: TypeActionApp.LOGIN_REQUEST
});

export const actionAppLoginResponse = (userInfo: IUserInfoAuth, companyInfo: ICompanyInfo, isLoggedIn = true): IActionApp => ({
    userInfo,
    companyInfo,
    isLoggedIn,
    type: TypeActionApp.LOGIN_RESPONSE
});

export const actionAppMessageSet = (messageInfo: Array<IAppMessage>): IActionApp => ({
    messageInfo,
    type: TypeActionApp.SET_MESSAGE
});
export const actionAppMessageRemove = (messageId: number): IActionApp => ({
    messageId,
    type: TypeActionApp.REMOVE_MESSAGE
});