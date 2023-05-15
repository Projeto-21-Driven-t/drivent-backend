import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
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

  let nickelodeonResort = await prisma.hotel.findFirst({
    where: {
      id: 280
    }
  });

  if(!nickelodeonResort) {
    await prisma.hotel.create({
      data: {
        name: 'Nickelodeon Resort',
        image: 'https://www.mercadoeeventos.com.br/wp-content/uploads/2021/07/e26fe1431a11dcc60f0bb45d8e0dff5c-1024x576.jpg'
      }
    })
  }

  let bobSponjaRoom = await prisma.room.findFirst({
    where: {
      name: '101'
    }
  });

  if (!bobSponjaRoom) {
    await prisma.room.create({
      data: {
        name: '101',
        capacity: 3,
        hotelId: 280
      }
    })

  };

  let doraRoom = await prisma.room.findFirst({
    where: {
      name: '102'
    }
  });

  if (!doraRoom) {
    await prisma.room.create({
      data: {
        name: '102',
        capacity: 4,
        hotelId: 280
      }
    })

  };

  let transilvaniaHotel = await prisma.hotel.findFirst({
    where: {
      id: 283
    }
  });

  if(!transilvaniaHotel) {
    await prisma.hotel.create({
      data: {
        name: 'Hotel Transilvania',
        image: 'https://m.media-amazon.com/images/I/915Huy9XfDL.jpg'
      }
    })
  }

  let mumiaRoom = await prisma.room.findFirst({
    where: {
      hotelId: 283
    }
  });

  if (!mumiaRoom) {
    await prisma.room.create({
      data: {
        name: '101',
        capacity: 4,
        hotelId: 283
      }
    })

  };

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

