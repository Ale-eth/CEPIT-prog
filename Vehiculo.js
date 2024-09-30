"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(numero) {
        this.setTipo(numero);
    }
    Vehiculo.prototype.setTipo = function (tipo) {
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
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
