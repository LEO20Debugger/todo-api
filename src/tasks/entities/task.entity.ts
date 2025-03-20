/* eslint-disable prettier/prettier */
// Importing the necessary modules
import {
    mysqlTable,
    text,
    varchar,
    int,
    timestamp,
    boolean,
  } from 'drizzle-orm/mysql-core';
  
  // Drizzle ORM Table Definition
  export const tasks = mysqlTable('tasks', {
    id: int('id').primaryKey().autoincrement(),
    title: varchar('title', { length: 255 }).notNull(),
    description: text('description'),
    completed: boolean('completed').default(false).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').onUpdateNow(),
  });