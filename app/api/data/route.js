import { NextResponse } from "next/server";
import axios from 'axios';
 
// Handles GET requests to /api
export async function GET(request) {
   try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;
  return NextResponse.json( users );
   } catch (error) {
    return NextResponse.json({error: 'Data cannot be fetched'})
   }
}