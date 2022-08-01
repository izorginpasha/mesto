export class UserInfo{
    constructor({selectorUser,selectorUserInfo,selectorUserAvatar}){
        this._profileUser = document.querySelector(selectorUser);
        this._profileUserInfo = document.querySelector(selectorUserInfo);
        this._selectorUserAvatar = document.querySelector(selectorUserAvatar);
    }
    getUserInfo(){
        const userInfo = { profileName: this._profileUser.textContent, profileInfo: this._profileUserInfo.textContent };
        return userInfo;
    }
    setUserInfo({name, about, avatar}){
        this._profileUser.textContent = name;
        this._profileUserInfo.textContent = about;
        this._selectorUserAvatar.url = avatar;

    }

}