import { Body, Controller, Param, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post(':userId')
  async upsertProfile(
    @Param('userId') userId: number,
    @Body() createProfileDto: CreateProfileDto,
  ) {
    return await this.profilesService.upsertProfile(createProfileDto, userId);
  }
}
