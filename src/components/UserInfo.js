export class UserInfo{
    constructor({selectorUser,selectorUserInfo}){
        this._profileUser = document.querySelector(selectorUser);
        this._profileUserInfo = document.querySelector(selectorUserInfo);
    }
    getUserInfo(){
        const userInfo = { profileName: this._profileUser.textContent, profileInfo: this._profileUserInfo.textContent };
        return userInfo;
    }
    setUserInfo(profileName, profileInfo){
        this._profileUser.textContent = profileName;
        this._profileUserInfo.textContent = profileInfo;
    }
}