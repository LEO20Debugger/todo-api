/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { db } from '@db/index';
import { tasks } from '@tasks/entities/task.entity';
import { eq } from 'drizzle-orm';
import { HttpException, HttpStatus } from '@nestjs/common'

@Injectable()
export class TaskService {
  async getAllTasks() {
    return await db.select().from(tasks);
  }

  async getTaskById(id: number) {
    const [task] = await db.select().from(tasks).where(eq(tasks.id, id));
    return task;
  }

  async createTask(data: { title: string; description: string }) {
    await db.insert(tasks).values(data);
    const [newTask] = await db
      .select()
      .from(tasks)
      .where(eq(tasks.title, data.title));
    return newTask;
  }

  async updateTask(id: number, data: { title: string; description: string }) {
    await db.update(tasks).set(data).where(eq(tasks.id, id));
    const [updatedTask] = await db.select().from(tasks).where(eq(tasks.id, id));
    return updatedTask;
  }

  async deleteTask(id: number) {
    const result = await db.delete(tasks).where(eq(tasks.id, id));

    if (result[0].affectedRows === 1) {
      return { message: 'Task deleted successfully' };
    } else {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
  }
}
