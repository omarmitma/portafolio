export class ProjectsModel{
    title:string = "";
    description:string = "";
    documentacion:string = "";
    documentacionDownload:string = "";
    url:string = "";
    image:string = "";
    alt:string = "";
    tipo:number = 1;
    nombreTipo:string = "";
    tools:string[] = [];
    
    gitFrontend:string = "";
    gitBackend:string = "";
    urlFlag:boolean = true;
    documentacionFlag:boolean = true;
    gitFrontendFlag:boolean = true;
    gitBackendFlag:boolean = true;
}