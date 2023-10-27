import React, { useRef, useState } from 'react'
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts'
import { AiOutlineMenu } from 'react-icons/ai';
import { jsPDF } from "jspdf";

import * as htmlToImage from 'html-to-image';
const Chart2 = () => {
    const [chart1, setChart1] = useState(false)
    const chart1Ref = useRef(document.getElementById("chart1"))
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let n = 2
    const year = moment().year()
    let chartData = []
    for (let item in months) {
        n += 2;
        let val = { value: n, month: months[item] +" " +year }
        chartData.push(val)
    }
    
    const generatePDF = () => {
        // const input = document.getElementById('mytable');
        htmlToImage.toCanvas(document.getElementById('chart1'), { quality: 0.95 })
            .then(function (dataUrl) {
                const imgData = dataUrl.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save("download.pdf");
            });
    
    }
    const htmlToPNGImageConvert = () => {
        htmlToImage.toPng(document.getElementById("chart1"), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'chart.png';
                link.href = dataUrl;
                link.click();
            });
    }
    const htmlToJPEGImageConvert = () => {
        htmlToImage.toJpeg(document.getElementById("chart1"), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'chart.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }


    const htmlToSVGImageConvert = () => {
        htmlToImage.toSvg(document.getElementById("chart1"), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'chart.svg';
                link.href = dataUrl;
                link.click();
            });
    }


    const openFullscreen = () => {
        let elem = document.getElementById("chart1")
        elem.style.backgroundColor = "white"
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }
    const handlePrint2 = useReactToPrint({
        content: () => chart1Ref.current,
        copyStyles: true,
        pageStyle: {
            size: "landscape",
        }
    });


    return (
        <div  className=' w-[96%]  mx-[2%]  shadow-md my-5 shadow-gray-400 h-[500px] border-t-[2px] border-blue-600 rounded-xl'>
            <h1 className='text-xl font-semibold text-start p-5'>Sale in Financial Years</h1>
            <div className='flex relative justify-end cursor-pointer items-end mr-10 text-xl' onClick={() => { setChart1(!chart1) }}>
                <AiOutlineMenu size={20} />
                {chart1 &&
                    <div className='absolute right-0 top-5 w-[170px] z-10 min-h-[200px] shadow-md shadow-gray-400 bg-white broder-1 border-black'>
                        <ul className='py-5'>
                            <li className='text-center m-1 hover:bg-blue-500 hover:text-white text-sm' onClick={openFullscreen}>ViewFull Screen</li>
                            <li className='text-center m-1 hover:bg-blue-500 hover:text-white text-sm' onClick={handlePrint2}>Print Chart</li>
                            <hr className='w-full my-5 h-[2px] bg-black' />
                            <li className='text-center m-1 hover:bg-blue-500 hover:text-white text-xs' onClick={htmlToPNGImageConvert}>Download PNG image</li>
                            <li className='text-center m-1 hover:bg-blue-500 hover:text-white text-xs' onClick={htmlToJPEGImageConvert} >Download JPEG image</li>
                            <li className='text-center m-1 hover:bg-blue-500 hover:text-white text-xs' onClick={generatePDF}>Download PDF Document</li>
                            <li className='text-center m-1 hover:bg-blue-500 hover:text-white text-xs' onClick={htmlToSVGImageConvert}>Download SVG verctor image</li>
                        </ul>
                    </div>}
            </div>

            <ResponsiveContainer width={"100%"} height={"75%"} id="chart1"  >
                <LineChart width={"100%"} height={"400px"} data={chartData} margin={{ left: 30, right: 30 }} ref={chart1Ref}>
                    <YAxis label={{ value: 'Total Sales (PKR)', angle: -90, position: 'insideLeft' }} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" interval={'preserveStartEnd'}
                        padding={{ left: 25, right: 25 }}
                        dy={5}
                        tick={{ fontSize: "15" }}
                    />
                    <Tooltip />
                    <Legend verticalAlign='top' height={30} />
                    <Line dataKey="value" dot={{ r: 4, fill: 'blue' }} />

                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}

export default Chart2