export interface Product {
  categoria_producto: number;
  fecha_creacion_producto: Date;
  estado_producto: number;
  id_producto: number;
  imagen_producto: string;
  nombre_producto: string;
  precio_producto: number;
  descripcion_producto: string;
}

export interface ProducsArray{
    results: Product[];
}