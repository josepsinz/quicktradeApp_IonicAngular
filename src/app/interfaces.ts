export interface IArticulo {
    "titulo"?: string,
    "descripcion"?: string,
    "precio"?: string,
    "categoria"?: string,
    "id"?: number,
    "show"?: boolean,
    "foto"?: string[],
    "clave"?: string,
    "usuario"?:string,
}

export interface IMotor extends IArticulo {
    "tipologia"?: string,
    "kilometraje"?: string,
    "anyo"?: string
}

export interface IInmobiliaria extends IArticulo {
    "metros"?: string,
    "habitaciones"?: string,
    "localidad"?: string
}

export interface ITecnologia extends IArticulo {
    "estado"?: string
}

