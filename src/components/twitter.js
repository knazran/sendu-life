import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterContainer = () => {
  return (
    <div className="container mx-auto px-4 w-full md:w-7/12 lg:w-7/12">
        <h2 className="text-2xl text-left font-bold mb-2 text-black">
            Solidariti Bersama
        </h2>
        <h3 className="text-xl text-left mb-2 text-gray-700">
        Tweet #SenduLife to stand strong together
        </h3>
        <section className="twitterContainer ">
        <div className="twitter-embed w-full h-64">
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="sendu_life"
            options={{
                tweetLimit: "15",
                width: "100%",
            }}
            noFooter="true"
            noHeader="true"
            ></TwitterTimelineEmbed>
        </div>
        </section>
    </div>
    
  );
};

export default TwitterContainer;