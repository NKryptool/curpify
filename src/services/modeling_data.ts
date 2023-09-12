import curp from 'curp'
import { _curp_data } from "../interfaces/interfaces";
/****************************/
const modeling_generate = (prompt_data): Promise<_curp_data> => {
    return new Promise((resolve, reject) => {
        const data: _curp_data = {
            nombre: prompt_data.name,
            apellidoPaterno: prompt_data.ap,
            apellidoMaterno: prompt_data.am,
            genero: prompt_data.genero === 'Masculino' ? curp.GENERO.MASCULINO : curp.GENERO.FEMENINO,
            fechaNacimiento: prompt_data.nacimiento,
            estado: curp.ESTADO.TABASCO
        }
        resolve(data)
    })
}
/****************************/
export {
    modeling_generate
}