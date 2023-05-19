import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertHotels() {
    await prisma.hotel.createMany({
        data: [
            {
                name: 'Hotel Montaña Mágica',
                image: 'https://static.tudointeressante.com.br/uploads/2014/11/hoteis-criativos-xx.jpg'
            },
            {
                name: 'Hotel Hüttenpalast',
                image: 'https://static.tudointeressante.com.br/uploads/2014/11/hoteis-criativos-3.jpg'
            },
            {
                name: 'Hotel Hayema Heerd',
                image: 'https://static.tudointeressante.com.br/uploads/2014/11/hoteis-criativos-4.jpg'
            },
            {
                name: 'Hotel Sun Cruise',
                image: 'https://static.tudointeressante.com.br/uploads/2014/11/hoteis-criativos-5.jpg'
            },
            {
                name: 'Hotel TSpitbank Fort Sea',
                image: 'https://static.tudointeressante.com.br/uploads/2014/11/hoteis-criativos-10.jpg'
            },
            {
                name: 'Hotel Boeing 727',
                image: 'https://static.tudointeressante.com.br/uploads/2014/11/hoteis-criativos-7.jpg'
            },
            {
                name: 'Richard’s Camp',
                image: 'https://static.tudointeressante.com.br/uploads/2014/11/hoteis-criativos-0017.jpg'
            },
            {
                name: 'Hotel Prahran',
                image: 'https://static.tudointeressante.com.br/uploads/2014/11/hoteis-criativos-1.jpg'
            }
        ]
    });

    return await prisma.hotel.findMany();
};

const registeredHotels = {
    insertHotels
};

export default registeredHotels;
