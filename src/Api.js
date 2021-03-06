import Axios from "axios";

const Api = Axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: { "API-KEY": "bc684272-e9ca-4985-99cf-11891156c594" }
})

export const ApiSocialNetwork = {
    autsMe() { return Api.get("/auth/me") },
    authLogin() { return Api.delete("/auth/login") },
    authLoginPost(onClickk) { return Api.post("/auth/login", onClickk) },
    myProfile(myId) { return Api.get(`/profile/${myId}`) },
    newProfilePhotos(file) {
        const formDat = new FormData();
        formDat.append("image", file);
        return Api.put(`/profile/photo`, formDat, { headers: { "Content-Type": "multipart/form-data" } })
    },
    getStatus(myId) { return Api.get(`/profile/status/${myId}`) },
    putMyStatus(valueInputStatus) { return Api.put(`/profile/status`, {status:valueInputStatus})},
}
