import { post } from "../utils/http/request";

export function getTaskList(){
    return post("/profileTask")
}