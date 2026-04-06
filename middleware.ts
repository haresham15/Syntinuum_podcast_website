import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const hostname = request.headers.get('host') || '';

    // If the request comes from the old Vercel domain, force a 301 Permanent Redirect
    if (hostname === 'syntinuum.vercel.app') {
        url.hostname = 'syntinuumpodcast.com';
        url.port = ''; // Ensure port is cleared for production
        url.protocol = 'https:';
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

// Only match on root and all sub-paths, excluding next.js internal assets
export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|icon.png|media/.*).*)',
    ],
};
