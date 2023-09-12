#!/usr/bin/env node

import { Command } from "commander";
import { prompt } from "enquirer";
import curp from 'curp'
import { promt_params_generate } from "./services/mappers_prompt";
import { modeling_generate } from "./services/modeling_data";

const program: Command = new Command()

program
    .command('generate')
    .action(
        async () => {
            const params_promt = await prompt(promt_params_generate)
            const curp_data = await modeling_generate(params_promt)
            const g_curp = curp.generar(curp_data)
            console.log('/*****************************/');
            console.log(`CURP Generado: ${g_curp}`);
            console.log('/*****************************/');
        }
    )

program
    .command('validate <curp>')
    .action(
        async (input_c) => {
            console.log('/*****************************/');
            console.log(`Validacion CURP: ${curp.validar(input_c) === true ? 'Exitosa!' : 'Fallida'}`);
            console.log('/*****************************/');
        }
    )

program.parse(process.argv)