import { AuthService } from './auth.service';
import { Controller, Post } from "@nestjs/common";

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) {}

    @Post('signup')
    signup() {
        return this.AuthService.signup()
    }

    @Post('signin')
    signin() { 
        return this.AuthService.signin()
    }
}