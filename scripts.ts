// tsc archivo.ts
// node archivo.js
import { Vehiculo } from "./Vehiculo";

class RegistroAutomotor {
    private nombre: string;
    private vehiculos: Vehiculo[];
  
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.vehiculos = [];
    }
  

    public addVehiculo(vehiculo: Vehiculo): string {
      if(this.vehiculos.includes(vehiculo)){
        return "Vehiculo ya registrado";
      }else{
        this.vehiculos.push(vehiculo);
        return "Vehiculo registrado";
      }
    }
  
    public getVehiculo(posicion: number): Vehiculo | null {
        if(posicion < 0 || posicion >= this.vehiculos.length){
            console.log("Posicion no valida");
            return null;
        }else{
            return this.vehiculos[posicion];
        }
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getVehiculos(): Vehiculo[] {
        let copia = this.vehiculos;
        return copia;
    }

    public setVehiculo(posicion: number, vehiculo: Vehiculo): string {
        if(posicion < 0 || posicion >= this.vehiculos.length){
            return "Posicion no valida";
        }else{
            this.vehiculos[posicion] = vehiculo;
            return "Vehiculo actualizado";
        }
    }
  }