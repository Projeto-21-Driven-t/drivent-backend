import { PrismaClient } from "@prisma/client";
import registeredHotels from "./hotels";
const prisma = new PrismaClient();

async function rooms(hotels) {
    console.log('RECEBENDO HOTELS', hotels)
}

const registeredRooms = {
    rooms
};

export default registeredRooms;