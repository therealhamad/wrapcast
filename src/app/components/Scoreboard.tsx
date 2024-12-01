"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function Scores() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-b from-neutral-300 to-neutral-400 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        Meet your <span className="text-red-600">follower</span> of <span className="text-blue-950">December 2024</span>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-xl font-bold text-yellow-600 dark:text-white"
        >
          Daksh Kulshrestha
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          100 mentions | <span className="text-red-600"> 50 likes</span> | 20 replies | 10 retweets
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
          <Image
            src="/dk.jpg"
            height="1000"
            width="1000"
            className="h-80 w-80 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://warpcast.com/dakshk.eth"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal bg-blue-600 text-white dark:text-white"
          >
            Connect
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Wrap-ward
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
<CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          100 mentions | 50 likes | 20 replies | 10 retweets
        </CardItem>