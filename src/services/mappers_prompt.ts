/*******************************/
import { _promt } from "../interfaces/interfaces";
/*******************************/
const promt_params_generate: _promt[] = [
    {
        type: 'input',
        name: 'name',
        message: 'Ingrese el nombre'
    },
    {
        type: 'input',
        name: 'ap',
        message: 'Ingrese el apellido paterno'
    },
    {
        type: 'input',
        name: 'am',
        message: 'Ingrese el apellido materno'
    },
    {
        type: 'select',
        name: 'genero',
        message: 'Ingrese el apellido materno',
        choices: ['Masculino', 'Femenino']
    },
    {
        type: 'input',
        name: 'nacimiento',
        message: 'Fecha de nacimiento |dd-mm-yyyy|'
    }
]
/*******************************/
export {
    promt_params_generate
}