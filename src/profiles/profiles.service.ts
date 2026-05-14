import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async upsertProfile(createProfileDto: CreateProfileDto, userId: number) {
    const existingProfile = await this.profileRepository.findOneBy({
      user: { id: userId },
    });

    if (existingProfile) {
      const updatedProfile = this.profileRepository.merge(
        existingProfile,
        createProfileDto,
      );
      return await this.profileRepository.save(updatedProfile);
    }

    const profile = this.profileRepository.create({
      ...createProfileDto,
      user: { id: userId },
    });
    return await this.profileRepository.save(profile);
  }

  async remove(id: number) {
    return await this.profileRepository.softDelete(id);
  }

  async restore(id: number) {
    return await this.profileRepository.restore(id);
  }
}
