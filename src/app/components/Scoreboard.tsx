"use client";

import React, { useRef, useEffect } from 'react';
import { Chart, BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip, BarController, LineController, LineElement, PointElement, ArcElement, PieController } from 'chart.js';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Register Chart.js components
Chart.register(BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip, BarController, LineController, LineElement, PointElement, ArcElement, PieController);

const chartData = {
    fid: 2483,
    created_at: "2024-12-02T05:56:56.502427+00:00",
    wrap_data: {
        company_prediction: {
            company: "Solana",
            sentiment: 7
        },
        followings: 179,
        followers: 316,
        wallets: {
            ethereum: [
                "0xe70fc14df12f34507d14c820f29c500991a08da2",
                "0x28172273cc1e0395f3473ec6ed062b6fdfb15940"
            ],
            solana: []
        }
    }
};

const ChartsPage: React.FC = () => {
    const lineChartRef = useRef<HTMLCanvasElement | null>(null);
    const barChartRef = useRef<HTMLCanvasElement | null>(null);
    const pieChartRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const lineCtx = lineChartRef.current?.getContext('2d');
        const barCtx = barChartRef.current?.getContext('2d');
        const pieCtx = pieChartRef.current?.getContext('2d');

        if (lineCtx && barCtx && pieCtx) {
            const labels = ["Sentiment", "Followings", "Followers"];
            const dataValues = [
                chartData.wrap_data.company_prediction.sentiment,
                chartData.wrap_data.followings,
                chartData.wrap_data.followers
            ];

            // Create the line chart
            new Chart(lineCtx, {
                type: 'line',
                data: {
                    labels,
                    datasets: [
                        {
                            label: 'Metrics',
                            data: dataValues,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            fill: false,
                        }
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            min: 0,
                            max: 350,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        },
                        title: {
                            display: true,
                            text: 'Metrics (Line Chart)',
                            color: 'rgba(255, 255, 255, 0.7)'
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
                            label: 'Metrics',
                            data: dataValues,
                            backgroundColor: 'rgba(153, 102, 255, 0.2)',
                            borderColor: 'rgba(153, 102, 255, 1)',
                            borderWidth: 1,
                        }
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            min: 0,
                            max: 350,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        },
                        title: {
                            display: true,
                            text: 'Metrics (Bar Chart)',
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                    },
                },
            });

            // Create the pie chart
            new Chart(pieCtx, {
                type: 'pie',
                data: {
                    labels,
                    datasets: [
                        {
                            label: 'Metrics',
                            data: dataValues,
                            backgroundColor: [
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1,
                        }
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        },
                        title: {
                            display: true,
                            text: 'Metrics (Pie Chart)',
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                    },
                },
            });
        }
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="w-full bg-gray-800 text-white">
                <CardHeader>
                    <CardTitle>Line Chart</CardTitle>
                    <CardDescription>Metrics over time</CardDescription>
                </CardHeader>
                <CardContent>
                    <canvas ref={lineChartRef} />
                </CardContent>
            </Card>
            <Card className="w-full bg-gray-800 text-white">
                <CardHeader>
                    <CardTitle>Bar Chart</CardTitle>
                    <CardDescription>Metrics comparison</CardDescription>
                </CardHeader>
                <CardContent>
                    <canvas ref={barChartRef} />
                </CardContent>
            </Card>
            <Card className="w-full bg-gray-800 text-white">
                <CardHeader>
                    <CardTitle>Pie Chart</CardTitle>
                    <CardDescription>Metrics distribution</CardDescription>
                </CardHeader>
                <CardContent>
                    <canvas ref={pieChartRef} />
                </CardContent>
            </Card>
        </div>
    );
};

export default ChartsPage;