import { z } from 'zod';

// Zod Validation Schema for Creating a Task
export const createTaskSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  description: z.string().optional(),
  completed: z.boolean().optional().default(false),
});

// Zod Validation Schema for Updating a Task
export const updateTaskSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
  completed: z.boolean().optional(),
});
