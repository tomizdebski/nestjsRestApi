import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signin() {
        return {msg: 'I have signed In'}
    }

    signup() {
        return {msg: 'I have signed up'}
    }
}
