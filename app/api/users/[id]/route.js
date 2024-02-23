import { user } from "@/app/util/db";

import { NextResponse } from "next/server";

export function GET(request, content){
    
    const userData = user.filter((item) => item.id==content.params.id)

    return NextResponse.json(userData, {status: 200})
}