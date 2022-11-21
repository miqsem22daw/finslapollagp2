import dades from './dades.json';
import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'aplicacio',
    styleUrls: ['./dades.css'],
    templateUrl: './dades.html',
})

export class Array_json implements AfterViewInit {
    paisos: any = [];
    primer: any = [];
    // info: any = [];
    // dada: any = [];
    // serie: any = [];

    displayedColumns: string[];
    dataSource: any = [];
    constructor() {
        let serie = ["Pais", "Població total", "Educació Primaria", "Creixement del PIB", "Taxa de natalitat", "Taxa de mortalitat", "Esperança de vida (anys)", "Ratio de pobresa (% població)", "Turisme (arribades)"]
        type obj = {
            Pais: string;
            "Població total": string;
            "Educació Primaria": string;
            "Creixement del PIB": string;
            "Taxa de natalitat": string,
            "Taxa de mortalitat": string,
            "Esperança de vida (anys)": string,
            "Ratio de pobresa (% població)": string,
            // "Personal de les forces armades": string,
            "Turisme (arribades)": string,
            // "Migració neta": string,
        };
        for (let y = 0; y < dades.length; y += 10) {
            const a1 = {} as obj;
            a1.Pais = String(dades[y]["Country Name"]);
            a1["Població total"] = String(dades[y]["2020 [YR2020]"]);
            a1["Educació Primaria"] = String(dades[y + 1]["2020 [YR2020]"]);
            a1["Creixement del PIB"] = String(dades[y + 2]["2020 [YR2020]"]);
            a1["Taxa de natalitat"] = String(dades[y + 3]["2020 [YR2020]"]);
            a1["Taxa de mortalitat"] = String(dades[y + 4]["2020 [YR2020]"]);
            a1["Esperança de vida (anys)"] = String(dades[y + 5]["2020 [YR2020]"]);
            a1["Ratio de pobresa (% població)"] = String(dades[y + 6]["2020 [YR2020]"]);
            // a1["Personal de les forces armades"] = String(dades[y + 7]["2020 [YR2020]"]);
            a1["Turisme (arribades)"] = String(dades[y + 8]["2020 [YR2020]"]);
            // a1["Migració neta"] = String(dades[y + 9]["2020 [YR2020]"]);
            this.primer.push(a1);
        }
        console.log(this.primer);
        // console.log(this.paisos);

        this.dataSource = new MatTableDataSource(this.primer);
        this.displayedColumns = serie;
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    @ViewChild(MatSort)
    sort!: MatSort;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
}

// export interface PeriodicElement {
//     name: string;
//     position: number;
//     weight: number;
//     symbol: string;
//     description: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//     {
//         position: 1,
//         name: 'Hydrogen',
//         weight: 1.0079,
//         symbol: 'H',
//         description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//           atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
//     },
// ];

    // constructor() {

    //     for (let y = 0; y < dades.length; y++) {
    //         if (!(y % 10)) {
    //             this.primer = [{ pais: dades[y]["Country Name"], serie: 'Pais: '}];
    //             this.paisos.push(this.primer);
    //         }
    //         // if (!(y % 10)) {
    //             this.dada = [{valor: dades[y]["2020 [YR2020]"] }];
    //             this.info.push(this.dada);
    //         // }

    //         let proba = {
    //             poblacio: dades[y]["2020 [YR2020]"],
    //             educacioPrimaria: dades[y+1]["2020 [YR2020]"],
    //             gdpGrowth: dades[y+2]["2020 [YR2020]"],
    //             birthRate: dades[y+3]["2020 [YR2020]"],
    //             deathRate: dades[y+4]["2020 [YR2020]"],
    //             esperanca: dades[y+5]["2020 [YR2020]"],
    //             pobresa: dades[y+6]["2020 [YR2020]"],
    //             personalArmada: dades[y+7]["2020 [YR2020]"],
    //             turisme: dades[y+8]["2020 [YR2020]"],
    //             migracio: dades[y+9]["2020 [YR2020]"],
    //         }
    //         this.primer.push(proba);
    //         // let proba = { serie: dades[y]["Series Name"], valor: dades[y]["2020 [YR2020]"] };
    //     }
    //     this.dataSource = this.paisos;
    //     this.displayedColumns = Object.keys(this.dataSource[0]).map(k => k)
    //     console.log(this.paisos);
    // }

