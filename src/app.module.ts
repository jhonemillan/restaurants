import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumenuModule } from './documenu/documenu.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://jhonemillan:94063633@cluster0-cotx7.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true },
    ),
    DocumenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
