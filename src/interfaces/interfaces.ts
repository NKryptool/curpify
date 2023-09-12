/*******************************/
interface _promt {
    type: string,
    name: string,
    message: string,
    choices?: string[]
}

interface _curp_data {
    nombre: string;
    apellidoPaterno:string;
    apellidoMaterno: string;
    genero: any;
    fechaNacimiento: string;
    estado: any;
}
/*******************************/
export {
    _promt,
    _curp_data
}