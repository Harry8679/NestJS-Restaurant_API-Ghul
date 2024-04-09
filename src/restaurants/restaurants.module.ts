import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller';

import { RestaurantSchema } from './schemas/restaurant.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Restaurant', schema: RestaurantSchema },
    ]),
  ],
  controllers: [RestaurantsController],
})
export class RestaurantsModule {}
