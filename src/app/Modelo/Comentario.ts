import { Reply } from "./Reply";

export class Comentario{

    id:number = 0;
    nombre:string = "";
    comentario:string = "";
    fecha:string = "";
    meGustas:number = 0;
    reply:Reply[] = [];

}