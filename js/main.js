const servicios = [
    { id: 1, nombre: "La revoltoda-Maritimo", precio: 4500, img: "img1.jpg" },
    { id: 2, nombre: "La Huella-Maritimo", precio: 5800, img: "img2.jpg" },
    { id: 3, nombre: "La Cabaña-Golf", precio: 4800, img: "img3.jpg" },
    { id: 4, nombre: "Buena Vista-Golf", precio: 4500, img: "img4.jpg" },
    {
      id: 5,
      nombre: "Bosque-Senderos",
      precio: 6200,
      img: "img5.jpg",
    },
    {
      id: 6,
      nombre: "Buena Vida-Deportiva",
      precio: 5200,
      img: "img6.jpg",
    },
  ];
  function Servicio(nombre, precio, img) {
    this.id = servicios.length + 1;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    if (this.img === undefined) {
      this.img = "https://costaesmeraldaguests.com/";
    } else {
      this.img = img;
    }
  }
  
  servicios.push(new Servicio("serivico de limpieza", 1900, "img.jpg"));
  servicios.push(new Servicio("servicio blanqueria", 3200, "img.jpg"));
  
  //funciones de filtrado
  console.log(servicios);
  
  function findService(arr, filtro) {
    const encontrado = arr.find((service) => {
      return service.nombre.includes(filtro.toLowerCase());
    });
    return encontrado;
  }
    //funcion generica
    function filtrar(arr, filtro, param) {
        return arr.filter((el) => {
          if (param == "precio") {
            return el[param] <= filtro;
          }else if(param === "id"){
            return el[param]== filtro
          }else{
            return el[param].includes(filtro)
      
          }
        });
      }
   const porPrecio = filtrar(servicios, 6100, "precio")
  
   const porId= filtrar(servicios, 2, "id" )
  
   console.log(porPrecio);
   console.log(porId);
   const porNombre= filtrar(servicios, "golf", "nombre")
   console.log(porNombre);
  