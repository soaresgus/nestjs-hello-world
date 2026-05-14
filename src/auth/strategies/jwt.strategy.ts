import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 1. Extrai o "Bearer <TOKEN>"
      ignoreExpiration: false, // 2. Não ignora a expiração do token
      secretOrKey: process.env.JWT_SECRET || '', // 3. Chave secreta para validar o token
    });
  }

  // 4. Se o token for válido, este método é chamado com o payload do token
  validate(payload: { sub: string; email: string }) {
    return { sub: Number(payload.sub), email: payload.email };
  }
}
