export class UserInfo{
    constructor({selectorUser,selectorUserInfo,selectorUserAvatar}){
        this._profileUser = document.querySelector(selectorUser);
        this._profileUserInfo = document.querySelector(selectorUserInfo);
        this._selectorUserAvatar = document.querySelector(selectorUserAvatar);
        this._user={};

    }
    getUserInfo(){
        const userInfo = { profileName: this._profileUser.textContent, profileInfo: this._profileUserInfo.textContent };
        return userInfo;
    }
    setUserInfo(user){
        Object.assign(this._user,user);
        this._profileUser.textContent = user.name;
        this._profileUserInfo.textContent = user.about;
        this._selectorUserAvatar.src = user.avatar;
        

    }

}