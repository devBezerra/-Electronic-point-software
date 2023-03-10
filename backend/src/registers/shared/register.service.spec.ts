import { Test, TestingModule } from '@nestjs/testing';
import { RegisterService } from './register.service';

describe('RegisterService', () => {
  let provider: RegisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterService],
    }).compile();

    provider = module.get<RegisterService>(RegisterService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
