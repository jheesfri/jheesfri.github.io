const { createApp } = Vue

const app = createApp({
    data() {
        return{
            redesSociales: [
                {
                    nombre: "Instagram",
                    url: "https://www.instagram.com/_miss___accesorios_/",
                    imagen: "https://i.pinimg.com/564x/43/85/a5/4385a5479214954fa9fab6f1a778623f.jpg"
                },
                {
                    nombre: "Facebook",
                    url: "https://www.facebook.com/profile.php?id=61557393724458",
                    imagen: "https://i.pinimg.com/564x/b5/9d/15/b59d15f1d09ebd9882cad4a448688aac.jpg"
                },
                {
                    nombre: "Whatsapp",
                    url: "https://wa.me/+573146351222/?text=Hola,%20estoy%20interesado%20en%20tus%20productos.",
                    imagen: "https://i.pinimg.com/564x/bf/8a/76/bf8a76719f900b8757154eb3cfbc844a.jpg"
                }
            ],
            informacion: [
                {
                    nombre: "Medellin",
                    imagen: "https://i.pinimg.com/564x/56/31/8f/56318fefa4dfb4bf39c25fcb19d9e2ff.jpg"
                },
                {
                    nombre: "Envios Nacionales",
                    imagen: "https://i.pinimg.com/564x/7d/90/43/7d9043d705f3dca40abecab7363e884b.jpg"
                },
                {
                    nombre: "Pago Contra Entrega",
                    imagen: "https://i.pinimg.com/564x/31/0a/dc/310adc5391df937daf573e506d1c996e.jpg"
                }
            ],
            lineas: [
                {
                    nombre: "MASCOTAS",
                    imagen: "https://i.pinimg.com/564x/e8/08/a9/e808a91ccd785f5803d9b289ba47774b.jpg",
                    linea: "lineaMascotas",
                    url:"pages/mascotas.html"
                },
                {
                    nombre: "HOGAR",
                    imagen: "https://i.pinimg.com/564x/0e/5d/1f/0e5d1f8734023823982093288c05b05a.jpg",
                    linea: "lineaHogar",
                    url: "pages/hogar.html"
                },
                {
                    nombre: "DECORACIONES",
                    imagen: "https://i.pinimg.com/564x/13/99/b5/1399b536cb4eff43c50912b27eb96d14.jpg",
                    linea: "lineaDecoraciones",
                    url: "pages/decoraciones.html"
                }
            ],
            
             lineaMascotas: [
                {
                    nombre: "camas",
                    referencia: "ref001",
                    imagen: "imagen_camas.jpg"
                },
                {
                    nombre: "collares",
                    referencia: "ref002",
                    imagen: "imagen_collares.jpg"
                },
                {
                    nombre: "pecheras",
                    referencia: "ref003",
                    imagen: "imagen_pecheras.jpg"
                },
                {
                    nombre: "arnes",
                    referencia: "ref004",
                    imagen: "imagen_arnes.jpg"
                },
                {
                    nombre: "chalecos",
                    referencia: "ref005",
                    imagen: "imagen_chalecos.jpg"
                },
                {
                    nombre: "bozales",
                    referencia: "ref006",
                    imagen: "imagen_bozales.jpg"
                },
                {
                    nombre: "pañoletas",
                    referencia: "ref007",
                    imagen: "imagen_panoletas.jpg"
                }
            ],
            
            lineaHogar: [],
            lineaDecoraciones: []
        }
    },
    created() {

    },
    methods: {

    },
    computed: {

    }
}).mount('#indexHtml')