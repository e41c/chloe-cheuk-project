import React from 'react';

function HeroLayout() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Embed Vimeo video */}
                <div className="w-full lg:w-2/3">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe src="https://player.vimeo.com/video/213823170?h=6ba4780785" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                {/* Additional content for your hero layout */}
                <div className="w-full lg:w-1/3">
                    <h1 className="text-5xl font-bold">Hi, I'm Chloe</h1>
                    <p className="py-6">
                        Artist living in Monteral, Canada. <hr></hr>Born and raised in Hong Kong.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HeroLayout;
