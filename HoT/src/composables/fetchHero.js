import { hr1  } from "../HeroInfo.js";
import MessageService from "./messageServices.js";
export default function fetchHeros(){
    let heromen=hr1;
    new MessageService().add("fetched heroes");
    return heromen;
}