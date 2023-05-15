-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "reminder" DATETIME,
    "description" TEXT,
    "flag" TEXT NOT NULL DEFAULT 'PRIORITY_3',
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "duration_passed" BOOLEAN NOT NULL DEFAULT false
);
