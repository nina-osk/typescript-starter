import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Robots } from '../schemas/robot.schema'; // Adjusted path to match the correct location
import { CreateRobotDto } from './dto/create-robot.dto';

@Injectable()
export class RobotsService {
  constructor(
    @InjectModel('Robots')
    // Assuming you have a Mongoose model for Robots
    private readonly robotModel:Model<Robots>, // Assuming you have a Mongoose model for Robots
  ) {}
  async create(createRobotDto: CreateRobotDto) {
    try {
   createRobotDto.name = createRobotDto.name.toLowerCase();
    const robot = await this.robotModel.create(createRobotDto);
    return robot;
    }catch (error) {
      this.handleError(error);
     }}

  findAll() {}


  async findOneById(id: string) {
  let robots : RobotsService;
  if(!isNaN(+id)) {
    robots = await this.robotModel.findOne({ no: id });
    }
    if(isValidObjectId(id)) {
      robots = await this.robotModel.findById(id);
    }
    if(!robots) {
      robots = await this.robotModel.findOne({ name: name });
    }
    if(!robots) {
      throw new Error('Robot not found');
    }
    return robots;
  }

private handleError(error: any) {
if(error.code === 11000) {
  throw new Error('Robot already exists');
} 
throw new Error('Error creating robot');}

}
