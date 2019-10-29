import React from "react";
export default function Card({ props, ...cardProps }) {
    return (
    // <section className="container mx-auto mb-6"></section>
    <div className="container mb-6">
        <div className="max-w-2xl mx-auto rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {cardProps.title}
                </div>
                <p className="text-gray-700 text-base">
                    {cardProps.subtitle}
              </p>
            </div>
            <div className="px-6 py-4">
                <iframe className='w-full h-64' src="https://open.spotify.com/embed/track/3LZZMFF8xgTgakWmmRPLJn" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>
    </div>
    );
}
