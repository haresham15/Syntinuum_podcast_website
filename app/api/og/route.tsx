import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        // Dynamic params
        const hasTitle = searchParams.has('title');
        const title = hasTitle
            ? searchParams.get('title')?.slice(0, 100)
            : 'Syntinuum Podcast';

        const guest = searchParams.get('guest');

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#0a0a0a',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                        color: 'white',
                        fontFamily: 'sans-serif',
                        padding: '40px 80px',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #333',
                            borderRadius: '9999px',
                            padding: '10px 30px',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            marginBottom: '40px',
                        }}
                    >
                        <span style={{ color: '#00f0ff', fontSize: 24, fontWeight: 'bold', letterSpacing: '4px' }}>
                            SYNTINUUM
                        </span>
                        <span style={{ color: '#bd00ff', fontSize: 24, fontWeight: 'bold', letterSpacing: '4px', marginLeft: '10px' }}>
                            PODCAST
                        </span>
                    </div>

                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 900,
                            letterSpacing: '-0.05em',
                            lineHeight: 1.1,
                            marginBottom: '20px',
                            color: 'white',
                            textShadow: '0 0 40px rgba(189, 0, 255, 0.4)',
                        }}
                    >
                        {title}
                    </div>

                    {guest && (
                        <div
                            style={{
                                fontSize: 36,
                                color: '#a1a1aa',
                                marginTop: '20px',
                            }}
                        >
                            Featuring <span style={{ color: '#00f0ff' }}>{guest}</span>
                        </div>
                    )}
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
