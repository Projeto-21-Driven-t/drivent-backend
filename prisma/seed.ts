import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";


import registeredHotels from "./hotels";
import registeredRooms from "./hotelRooms";
const prisma = new PrismaClient();

async function main() {
  let event = await prisma.event.findFirst();
  if (!event) {
    event = await prisma.event.create({
      data: {
        title: "Driven.t",
        logoImageUrl: "https://files.driveneducation.com.br/images/logo-rounded.png",
        backgroundImageUrl: "linear-gradient(to right, #FA4098, #FFD77F)",
        startsAt: dayjs().toDate(),
        endsAt: dayjs().add(21, "days").toDate(),
      },
    });
  }

  let onlineTicket = await prisma.ticketType.findFirst({
    where: {
      isRemote: true,
      includesHotel: false
    }
  });

  if (!onlineTicket) {
    onlineTicket = await prisma.ticketType.create({
      data: {
        name: 'Online',
        price: 100,
        isRemote: true,
        includesHotel: false
      }
    })
  };

  let regularTicketHotelTrue = await prisma.ticketType.findFirst({
    where: {
      isRemote: false,
      includesHotel: true
    }
  });

  if (!regularTicketHotelTrue) {
    await prisma.ticketType.create({
      data: {
        name: 'Presencial + Com Hotel',
        price: 600,
        isRemote: false,
        includesHotel: true
      }
    })
  };

  let regularTicketHotelFalse = await prisma.ticketType.findFirst({
    where: {
      isRemote: false,
      includesHotel: false
    }
  });

  if (!regularTicketHotelFalse) {
    await prisma.ticketType.create({
      data: {
        name: 'Presencial Sem Hotel',
        price: 250,
        isRemote: false,
        includesHotel: false
      }
    })

  };

  let hotels = await prisma.hotel.findMany();
  if (!hotels || hotels.length === 0) {
    hotels = await registeredHotels.insertHotels();
  }

  let hotelsRooms = await prisma.room.findMany();
  if (!hotelsRooms || hotelsRooms.length === 0) {
    await registeredRooms.rooms(hotels)
  }


  console.log({ event });

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

