import { Hotel, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function roomsHotelOne(hotelId: number) {
    await prisma.room.createMany({
        data: [
            {
                name: '102',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '104',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '106',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '108',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '201',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '203',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '206',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '302',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '304',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '401',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '403',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '500',
                capacity: 2,
                hotelId: hotelId
            }
        ]
    });
};

async function roomsHotelTwo(hotelId: number) {
    await prisma.room.createMany({
        data: [
            {
                name: '101',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '102',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '103',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '104',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '105',
                capacity: 2,
                hotelId: hotelId
            }
        ]
    });
};

async function roomsHotelThree(hotelId: number) {
    await prisma.room.createMany({
        data: [
            {
                name: '101',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '103',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '106',
                capacity: 2,
                hotelId: hotelId
            },{
                name: '109',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '111',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '113',
                capacity: 3,
                hotelId: hotelId
            }
        ]
    });
};

async function roomsHotelFour(hotelId: number) {
    await prisma.room.createMany({
        data: [
            {
                name: '101',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '102',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '103',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '104',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '201',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '202',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '203',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '204',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '301',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '302',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '303',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '304',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '401',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '402',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '403',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '404',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '501',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '502',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '503',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '504',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '601',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '602',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '603',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '604',
                capacity: 3,
                hotelId: hotelId
            }   
        ]
    })
};

async function roomsHotelFive(hotelId: number) {
    await prisma.room.createMany({
        data: [
            {
                name: '101',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '102',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '103',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '104',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '105',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '201',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '202',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '203',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '204',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '301',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '302',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '303',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '304',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '401',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '402',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '403',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '404',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '501',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '502',
                capacity: 2,
                hotelId: hotelId
            }
        ]
    });
};

async function roomsHotelSix(hotelId: number) {
    await prisma.room.createMany({
        data: [
            {
                name: '100',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '104',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '108',
                capacity: 2,
                hotelId: hotelId
            }
        ]
    })
};

async function roomsHotelSeven(hotelId: number) {
    await prisma.room.createMany({
        data: [
            {
                name: '101',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '102',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '103',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '104',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '105',
                capacity: 3,
                hotelId: hotelId
            },
            {
                name: '106',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '107',
                capacity: 3,
                hotelId: hotelId
            }
        ]
    })
};

async function roomsHotelEight(hotelId: number) {
    await prisma.room.createMany({
        data: [
            {
                name: '101',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '102',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '201',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '202',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '301',
                capacity: 2,
                hotelId: hotelId
            },
            {
                name: '302',
                capacity: 2,
                hotelId: hotelId
            }
        ]
    });
}

async function rooms(hotels: Hotel[]) {
    const [
        hotelOne, 
        hotelTwo, 
        hotelThree, 
        hotelFour, 
        hotelFive, 
        hotelSix, 
        hotelSeven, 
        hotelEight
    ] = hotels;

    await roomsHotelOne(hotelOne.id);
    await roomsHotelTwo(hotelTwo.id);
    await roomsHotelThree(hotelThree.id);
    await roomsHotelFour(hotelFour.id);
    await roomsHotelFive(hotelFive.id);
    await roomsHotelSix(hotelSix.id);
    await roomsHotelSeven(hotelSeven.id);
    await roomsHotelEight(hotelEight.id)
}

const registeredRooms = {
    rooms
};

export default registeredRooms;