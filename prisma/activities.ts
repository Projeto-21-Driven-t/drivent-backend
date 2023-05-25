import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertActivities() {
    await prisma.activity.createMany({
        data: [
            {
                day: 'Sexta',
                date: '23/05',
                place: 'Auditório Principal',
                name: 'HTML Básico',
                startsAt: '09:00',
                endsAt: '11:00',
                capacity: 15
            },
            {
                day: 'Sexta',
                date: '25/05',
                place: 'Auditório Lateral',
                name: 'CSS Básico',
                startsAt: '09:00',
                endsAt: '11:00',
                capacity: 15
            },
            {
                day: 'Sexta',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: desespero',
                startsAt: '09:00',
                endsAt: '10:00',
                capacity: 20
            },
            {
                day: 'Sexta',
                date: '24/05',
                place: 'Sala de Workshop',
                name: 'Palestra: buscando calma',
                startsAt: '10:00',
                endsAt: '11:00',
                capacity: 20
            },
            {
                day: 'Sexta',
                date: '23/05',
                place: 'Auditório Principal',
                name: 'HTML Intermediário',
                startsAt: '13:00',
                endsAt: '15:00',
                capacity: 15
            },
            {
                day: 'Sexta',
                date: '23/05',
                place: 'Auditório Lateral',
                name: 'CSS Intermediário',
                startsAt: '13:00',
                endsAt: '15:00',
                capacity: 15
            },
            {
                day: 'Sexta',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: vivendo no caos',
                startsAt: '13:00',
                endsAt: '14:00',
                capacity: 20
            },
            {
                day: 'Sexta',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: comprando rivotril sem receita',
                startsAt: '14:00',
                endsAt: '15:00',
                capacity: 40
            },
            {
                day: 'Sexta',
                date: '23/05',
                place: 'Auditório Principal',
                name: 'HTML Avançado',
                startsAt: '15:00',
                endsAt: '17:00',
                capacity: 20
            },
            {
                day: 'Sexta',
                date: '23/05',
                place: 'Auditório Lateral',
                name: 'CSS Avançado',
                startsAt: '15:00',
                endsAt: '17:00',
                capacity: 20
            },
            {
                day: 'Sexta',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: xingamentos estratégicos',
                startsAt: '15:00',
                endsAt: '16:00',
                capacity: 20
            },
            {
                day: 'Sexta',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: produtividade, chore enqunto coda',
                startsAt: '16:00',
                endsAt: '17:00',
                capacity: 20
            },
            {
                day: 'Sábado',
                date: '23/05',
                place: 'Auditório Principal',
                name: 'JavaScript Básico',
                startsAt: '09:00',
                endsAt: '11:00',
                capacity: 15
            },
            {
                day: 'Sábado',
                date: '23/05',
                place: 'Auditório Lateral',
                name: 'TypeScript Básico',
                startsAt: '09:00',
                endsAt: '11:00',
                capacity: 15
            },
            {
                day: 'Sábado',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: desespero 2',
                startsAt: '09:00',
                endsAt: '10:00',
                capacity: 20
            },
            {
                day: 'Sábado',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: buscando calma 2',
                startsAt: '10:00',
                endsAt: '11:00',
                capacity: 20
            },
            {
                day: 'Sábado',
                date: '23/05',
                place: 'Auditório Principal',
                name: 'JavaScript Intermediário',
                startsAt: '13:00',
                endsAt: '15:00',
                capacity: 15
            },
            {
                day: 'Sábado',
                date: '23/05',
                place: 'Auditório Lateral',
                name: 'TypeScript Intermediário',
                startsAt: '13:00',
                endsAt: '15:00',
                capacity: 15
            },
            {
                day: 'Sábado',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: vivendo no caos 2',
                startsAt: '13:00',
                endsAt: '14:00',
                capacity: 20
            },
            {
                day: 'Sábado',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: comprando ritalina sem receita',
                startsAt: '14:00',
                endsAt: '15:00',
                capacity: 40
            },
            {
                day: 'Sábado',
                date: '23/05',
                place: 'Auditório Principal',
                name: 'JavaScript Avançado',
                startsAt: '15:00',
                endsAt: '17:00',
                capacity: 20
            },
            {
                day: 'Sábado',
                date: '23/05',
                place: 'Auditório Lateral',
                name: 'TypeScript Avançado',
                startsAt: '15:00',
                endsAt: '17:00',
                capacity: 20
            },
            {
                day: 'Sábado',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: xingamentos estratégicos 2',
                startsAt: '15:00',
                endsAt: '16:00',
                capacity: 20
            },
            {
                day: 'Sábado',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: produtividade, chore enqunto coda 2',
                startsAt: '16:00',
                endsAt: '17:00',
                capacity: 20
            },
            {
                day: 'Domingo',
                date: '23/05',
                place: 'Auditório Principal',
                name: 'Testes de Integração ',
                startsAt: '09:00',
                endsAt: '11:00',
                capacity: 15
            },
            {
                day: 'Domingo',
                date: '23/05',
                place: 'Auditório Lateral',
                name: 'Testes Unitários',
                startsAt: '09:00',
                endsAt: '11:00',
                capacity: 15
            },
            {
                day: 'Domingo',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: gritando com calma',
                startsAt: '09:00',
                endsAt: '10:00',
                capacity: 20
            },
            {
                day: 'Domingo',
                date: '23/05',
                place: 'Sala de Workshop',
                name: 'Palestra: buscando excelência ao procastinar',
                startsAt: '10:00',
                endsAt: '11:00',
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