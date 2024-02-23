import bcrypt from 'bcryptjs'
import cookie from 'cookie-parser'
import User from '@/app/models/User'
import { generateToken } from '@/app/util/auth'
import { NextResponse } from 'next/server'

export async function POST(request) {

    if(request.method !== 'POST'){
        NextResponse.json({ message: 'Method Not Allowed'})
        return
    }
}