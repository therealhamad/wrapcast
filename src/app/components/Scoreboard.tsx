"use client";

import React, { useRef, useEffect } from 'react';
import { Chart, BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip, BarController, LineController, LineElement, PointElement } from 'chart.js';

// Register Chart.js components
Chart.register(BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip, BarController, LineController, LineElement, PointElement);

const ChartsPage: React.FC = () => {
  const lineChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const lineCtx = lineChartRef.current?.getContext('2d');
    const barCtx = barChartRef.current?.getContext('2d');

    if (lineCtx && barCtx) {
      const jsonData = {
        result: {
          casts: [
            {
              text: 'gm @clanker ...',
              replies: { count: 2 },
              reactions: { count: 1 },
            },
            {
              text: 'where can i find data of farcaster users with solana wallets linked',
              replies: { count: 3 },
              reactions: { count: 12 },
            },
          ],
        },
      };

      const casts = jsonData.result.casts;
      const labels = casts.map((cast) => cast.text);
      const replyCounts = casts.map((cast) => cast.replies.count);
      const reactionCounts = casts.map((cast) => cast.reactions.count);

      // Create the line chart
      new Chart(lineCtx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Replies',
              data: replyCounts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false,
            },
            {
              label: 'Reactions',
              data: reactionCounts,
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Daksh Kulshrestha Casts and Reactions (Line Chart)',
            },
          },
        },
      });

      // Create the bar chart
      new Chart(barCtx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Replies',
              data: replyCounts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
            {
              label: 'Reactions',
              data: reactionCounts,
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Daksh Kulshrestha Casts and Reactions (Bar Chart)',
            },
          },
        },
      });
    }
  }, []);

return (
    <div className='flex flex-row justify-between'>
        <canvas ref={lineChartRef} style={{ width: '45%' }} />

        <canvas ref={barChartRef} style={{ width: '45%' }} />
    </div>
);
};

export default ChartsPage;


/*import Image from "next/image";
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
        </CardItem>*/