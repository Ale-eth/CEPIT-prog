export class Vehiculo {
private tipo: string;

constructor(numero: number){
    this.setTipo(numero);
}

private setTipo(tipo: number): void {
    switch (tipo) {
        case 1:
            this.tipo = "Auto";
            break;
        case 2:
            this.tipo = "Moto";
            break;
        case 3:
            this.tipo = "Camion";
            break;
        default:
            console.log("Tipo de vehiculo no registrado");
            this.tipo = "null";
            break;
    }

}

public getTipo(): string {
    return this.tipo;
}

}