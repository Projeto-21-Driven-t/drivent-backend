import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertActivities() {
    await prisma.activity.createMany({
        data: [
            {
                place: 'Auditório Principal',
                name: 'HTML Básico',
                startsAt: '30/05/23 09:00',
                endsAt: '30/05/23 11:00',
                capacity: 15
            },
            {
                place: 'Auditório Lateral',
                name: 'CSS Básico',
                startsAt: '30/05/23 09:00',
                endsAt: '30/05/23 11:00',
                capacity: 15
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: desespero',
                startsAt: '30/05/23 09:00',
                endsAt: '30/05/23 10:00',
                capacity: 20
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: buscando calma',
                startsAt: '30/05/23 10:00',
                endsAt: '30/05/23 11:00',
                capacity: 20
            },
            {
                place: 'Auditório Principal',
                name: 'HTML Intermediário',
                startsAt: '30/05/23 13:00',
                endsAt: '30/05/23 15:00',
                capacity: 15
            },
            {
                place: 'Auditório Lateral',
                name: 'CSS Intermediário',
                startsAt: '30/05/23 13:00',
                endsAt: '30/05/23 15:00',
                capacity: 15
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: vivendo no caos',
                startsAt: '30/05/23 13:00',
                endsAt: '30/05/23 14:00',
                capacity: 20
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: comprando rivotril sem receita',
                startsAt: '30/05/23 14:00',
                endsAt: '30/05/23 15:00',
                capacity: 40
            },
            {
                place: 'Auditório Principal',
                name: 'HTML Avançado',
                startsAt: '30/05/23 15:00',
                endsAt: '30/05/23 17:00',
                capacity: 20
            },
            {
                place: 'Auditório Lateral',
                name: 'CSS Avançado',
                startsAt: '30/05/23 15:00',
                endsAt: '30/05/23 17:00',
                capacity: 20
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: xingamentos estratégicos',
                startsAt: '30/05/23 15:00',
                endsAt: '30/05/23 16:00',
                capacity: 20
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: produtividade, chore enqunto coda',
                startsAt: '30/05/23 16:00',
                endsAt: '17:00',
                capacity: 20
            },
            {
                place: 'Auditório Principal',
                name: 'JavaScript Básico',
                startsAt: '01/06/23 09:00',
                endsAt: '01/06/23 11:00',
                capacity: 15
            },
            {
                place: 'Auditório Lateral',
                name: 'TypeScript Básico',
                startsAt: '01/06/23 09:00',
                endsAt: '01/06/23 11:00',
                capacity: 15
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: desespero 2',
                startsAt: '01/06/23 09:00',
                endsAt: '01/06/23 10:00',
                capacity: 20
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: buscando calma 2',
                startsAt: '01/06/23 10:00',
                endsAt: '01/06/23 11:00',
                capacity: 20
            },
            {
                place: 'Auditório Principal',
                name: 'JavaScript Intermediário',
                startsAt: '01/06/23 13:00',
                endsAt: '15:00',
                capacity: 15
            },
            {
                place: 'Auditório Lateral',
                name: 'TypeScript Intermediário',
                startsAt: '01/06/23 13:00',
                endsAt: '15:00',
                capacity: 15
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: vivendo no caos 2',
                startsAt: '01/06/23 13:00',
                endsAt: '01/06/23 14:00',
                capacity: 20
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: comprando ritalina sem receita',
                startsAt: '01/06/23 14:00',
                endsAt: '01/06/23 15:00',
                capacity: 40
            },
            {
                place: 'Auditório Principal',
                name: 'JavaScript Avançado',
                startsAt: '01/06/23 15:00',
                endsAt: '01/06/23 17:00',
                capacity: 20
            },
            {
                place: 'Auditório Lateral',
                name: 'TypeScript Avançado',
                startsAt: '01/06/23 15:00',
                endsAt: '01/06/23 17:00',
                capacity: 20
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: xingamentos estratégicos 2',
                startsAt: '01/06/23 15:00',
                endsAt: '01/06/23 16:00',
                capacity: 20
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: produtividade, chore enqunto coda 2',
                startsAt: '01/06/23 16:00',
                endsAt: '01/06/23 17:00',
                capacity: 20
            },
            {
                place: 'Auditório Principal',
                name: 'Testes de Integração ',
                startsAt: '02/06/23 09:00',
                endsAt: '02/06/23 11:00',
                capacity: 15
            },
            {
                place: 'Auditório Lateral',
                name: 'Testes Unitários',
                startsAt: '02/06/23 09:00',
                endsAt: '02/06/23 11:00',
                capacity: 15
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: gritando com calma',
                startsAt: '02/06/23 09:00',
                endsAt: '02/06/23 10:00',
                capacity: 20
            },
            {
                place: 'Sala de Workshop',
                name: 'Palestra: buscando excelência ao procastinar',
                startsAt: '02/06/23 10:00',
                endsAt: '02/06/23 11:00',
                capacity: 20
            },
        ]
    });

    return await prisma.activity.findMany();
};

const registeredActivities = {
    insertActivities
};

export default registeredActivities;