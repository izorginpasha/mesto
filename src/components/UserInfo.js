export class UserInfo{
    constructor({selectorUser,selectorUserInfo}){
        this._profileUser = document.querySelector(selectorUserInfo);
        this._profileUserInfo = document.querySelector(selectorUserInfo);
    }
    getUserInfo(){
        const UserInfo = { profileName: "Жак-Ив Кусто", profileInfo: "Исследователь океана" };
    }
    setUserInfo({profileName, profileInfo}){
        this._profileUser.textContent = profileName;
        this._profileUserInfo.textContent = profileInfo;
    }
}