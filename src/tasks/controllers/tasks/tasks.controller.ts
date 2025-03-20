/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import { TaskService } from '@tasks/services/task.service';
import { createTaskSchema, updateTaskSchema } from '@tasks/dtos/task-schemas';

// Universal validation function
function validate(schema: any, data: unknown) {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new BadRequestException(result.error.errors);
  }
  return result.data;
}

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() body: unknown) {
    const validData = validate(createTaskSchema, body);
    return this.taskService.createTask(validData);
  }

  @Put(':id')
  updateTask(@Param('id', ParseIntPipe) id: number, @Body() body: unknown) {
    const validData = validate(updateTaskSchema, body);
    return this.taskService.updateTask(id, validData);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.deleteTask(id);
  }
}