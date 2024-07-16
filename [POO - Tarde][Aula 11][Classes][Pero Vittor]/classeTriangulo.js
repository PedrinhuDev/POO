class Triangulo{
    constructor(lado1, lado2, lado3){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    verificarLados(){
        if(this.lado1 == this.lado2 && this.lado2 == this.lado3){
            console.log("Equilatero");
        }
        else if(this.lado1 == this.lado2 || this.lado2 == this.lado3 || this.lado3 == this.lado1){
            console.log("Isosceles");
        }
        else{
            console.log("Escaleno");
        }
    }

}