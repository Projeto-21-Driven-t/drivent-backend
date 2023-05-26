-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "place" VARCHAR(50) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "startsAt" VARCHAR(20) NOT NULL,
    "endsAt" VARCHAR(20) NOT NULL,
    "capacity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);
