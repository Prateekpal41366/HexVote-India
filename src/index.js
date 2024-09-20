import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { scaleLinear, extent } from 'd3';
import { useData } from './useData';
import MapStates from './Images/MapStates.png';
import Incomeicon from './Images/Incomeicon.png';
import Graduateicon from './Images/Graduateicon.png';
import Casesicon from './Images/Casesicon.png';
import winningseats1 from './Images/winningseats1.png';
import winningseats2 from './Images/winningseats2.png';
import winningseats3 from './Images/winningseats3.png';
import winningseats4 from './Images/winningseats4.png';

const widthsvg = window.innerWidth;
const heightsvg = window.innerHeight;

const mapScale = ((window.innerHeight * 78) / 100) / 397.02;

const xVariance = (21 * mapScale) / 1.4341846758349706;

const initialMousePosition = {
  x: widthsvg / 2,
  y: heightsvg / 2,
};

const App = () => {

  const data = useData();

  const [nameAttribute, setNameAttribute] = useState('WpartyTwo');
  const [winnersAttribute, setWinnersAttribute] = useState('WinnersTwo');
  const [assetsAttribute, setAssetsAttribute] = useState('TotalassetsTwo');
  const [educationAttribute, setEducationAttribute] = useState('EducationTwo');
  const [colorAttribute, setColorAttribute] = useState('WpartyColorTwo');
  const [winningseats, setwinningseats] = useState(winningseats2);
  const [casesAttribute, setCasesAttribute] = useState('CasesTwo');

  const [stateOutline, setStateOutline] = useState('disableOutline');
  const [tooltipcss, settooltipcss] = useState('disabletooltipflex');

  const [cData1, setcData1] = useState('.');
  const [cData2, setcData2] = useState('.');
  const [cData3, setcData3] = useState('.');
  const [cData4, setcData4] = useState('.');
  const [cData5, setcData5] = useState('.');
  const [cData6, setcData6] = useState('.');
  const [cData7, setcData7] = useState('.');

  const [marksCss, setMarksCss] = useState('baseMarks');
  const [pop1, setpop1] = useState('constituencydisable');
  const [pop2, setpop2] = useState('wpartydisable');
  const [pop3, setpop3] = useState('wnamedisable');
  const [pop4, setpop4] = useState('totalassetsdisable');
  const [pop5, setpop5] = useState('educationdisable');
  const [pop6, setpop6] = useState('casesdisable');
  const [pop7, setpop7] = useState('partyshapedisable');
  const [pop8, setpop8] = useState('winningseatsenable');

  const [mousePoistion, setMousePosition] = useState(
    initialMousePosition,
  );
  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    },
    [setMousePosition],
  );

  const xValue = (d) => d.xvalue;
  const yValue = (d) => d.yvalue;
  const constituencyName = (d) => d.Constituencies;
  const partyName = (d) => d[nameAttribute];
  const winnerName = (d) => d[winnersAttribute];
  const totalAssets = (d) => d[assetsAttribute];
  const education = (d) => d[educationAttribute];
  const partyColor = (d) => d[colorAttribute];
  const cases = (d) => d[casesAttribute];

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, 370]);

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([386, 0]);

  const handleMouseEnter = (atr1, atr2, atr3, atr4, atr5, atr6, atr7) => {
    setcData1(atr1)
    setcData2(atr2)
    setcData3(atr3)
    setcData4(atr4)
    setcData5(atr5)
    setcData6(atr6)
    setcData7(atr7)
  };

  const setAttributes = (a1, a2, a3, a4, a5, a6, a7) => {
    setNameAttribute(a1)
    setWinnersAttribute(a2)
    setAssetsAttribute(a3)
    setEducationAttribute(a4)
    setColorAttribute(a5)
    setwinningseats(a6)
    setCasesAttribute(a7)
  }

  const changeMarksCss = () => {
    setMarksCss('changeMarks')
    setpop8('winningseatsdisable')

    setTimeout(() => {
      setMarksCss('baseMarks')
      setpop8('winningseatsenable')
    }, 100);
  }

  const popCss = () => {
    setpop1('constituencydisable')
    setpop2('wpartydisable')
    setpop3('wnamedisable')
    setpop4('totalassetsdisable')
    setpop5('educationdisable')
    setpop6('casesdisable')
    setpop7('partyshapeenable')

    setTimeout(() => {
      setpop1('constituencyenable')
      setpop2('wpartyenable')
      setpop3('wnameenable')
      setpop4('totalassetsenable')
      setpop5('educationenable')
      setpop6('casesenable')
      setpop7('partyshapedisable')
      
    }, 100);
  }

  const getTransform = (d) => {
    const x = xScale(xValue(d));
    const y = yScale(yValue(d));
    const scale = 0.001 * 51; // Scaling factor
    return `translate(${x},${y}) scale(${scale}, ${scale}) rotate(${90})`;
  };

  return (
    <>
      <div className='main'>

        <div className='heading'>
          <h1 className='h1'>Hex map of india</h1>
          <h2 className='h2'>Visualizing india's election data</h2>
          <h2 className='h3'>(c)2024  ..by Sahil Chaudhary and Prateek Pal</h2>
        </div>

        <h3 className='h4'>
          State Borders
        </h3>

        <button className={`button1 ${colorAttribute === 'StatesColor' ? 'selected' : 'notselected'}`}
          onClick={() => changeMarksCss() & setAttributes('none', 'States', 'none', 'none', 'StatesColor', 'none')}>
          States
        </button>
        <button className={`button5 ${colorAttribute === 'WpartyColorOne' ? 'selected' : 'notselected'}`}
          onClick={() => changeMarksCss() & setAttributes('WpartyOne', 'WinnersOne', 'TotalassetsOne', 'EducationOne', 'WpartyColorOne', winningseats1, 'CasesOne')}>
          2009
        </button>
        <button className={`button6 ${colorAttribute === 'WpartyColorTwo' ? 'selected' : 'notselected'}`}
          onClick={() => changeMarksCss() & setAttributes('WpartyTwo', 'WinnersTwo', 'TotalassetsTwo', 'EducationTwo', 'WpartyColorTwo', winningseats2, 'CasesTwo')}>
          2014
        </button>
        <button className={`button7 ${colorAttribute === 'WpartyColorThree' ? 'selected' : 'notselected'}`}
          onClick={() => changeMarksCss() & setAttributes('WpartyThree', 'WinnersThree', 'TotalassetsThree', 'EducationThree', 'WpartyColorThree', winningseats3, 'CasesThree')}>
          2019
        </button>
        <button className={`button8 ${colorAttribute === 'WpartyColorFour' ? 'selected' : 'notselected'}`}
          onClick={() => changeMarksCss() & setAttributes('WpartyFour', 'WinnersFour', 'TotalassetsFour', 'EducationFour', 'WpartyColorFour', winningseats4, 'CasesFour')}>
          2024
        </button>

        <button className={`button9 ${stateOutline === 'enableOutline' ? 'enableoutlinebutton' : 'disableoutlinebutton'}`}
          onClick={() => setStateOutline('enableOutline')}>
          on
        </button>
        <button className={`button10 ${stateOutline === 'disableOutline' ? 'enableoutlinebutton' : 'disableoutlinebutton'}`}
          onClick={() => setStateOutline('disableOutline')}>
          off
        </button>

        <div className='mapmain'>
          <svg width='100%' height='100%' className={marksCss}>
            <g transform={` translate(${xVariance},${-2}) scale(${mapScale})`}>
              {data.map((d, index) => (
                <polygon className='marks'
                  key={d.id || index}
                  transform={getTransform(d)}
                  points="150,15 258,77 258,202 150,265 42,202 42,77"
                  fill={partyColor(d)}
                  stroke={'#26232C'}
                  strokeWidth={15}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => settooltipcss("enabletooltipflex") & handleMouseEnter(constituencyName(d), partyName(d), winnerName(d), totalAssets(d), education(d), partyColor(d), cases(d)) & popCss()}
                  onMouseLeave={() => settooltipcss("disabletooltipflex")}
                >
                </polygon>
              ))}
            </g>

            <image className={stateOutline}
              href={MapStates}
              width={384.73 * mapScale}
              height={398 * mapScale}
              preserveAspectRatio='none'
              pointerEvents='none'
            />

          </svg>
        </div>

        <div className={tooltipcss} style={{ position: 'relative', left: mousePoistion.x + 20, top: mousePoistion.y + 20 }}>

          <div className='rect1'>
            <text className={pop1}>{cData1}</text>
            <text className={pop2}>{cData2}</text>
            <svg width='100%' height='100%'>
              <rect className={pop7}
                x='17%' y='39.5%'
                width='65%'
                height='50%'
                fill={cData6}
              />
            </svg>
          </div>
          <div className='rect2'>
            <div width='100%' height='100' className='borderleft'></div>
            <text className={pop3}>
              {cData3}
            </text>
            <text className={pop4}>
              {cData4}
            </text>
            <text className={pop5}>
              {cData5}
            </text>
            <text className={pop6}>
            {cData7}
            </text>
            <svg width='100%' height='100%'>
              <image className='incomeimgcss'
                href={Incomeicon}
                pointerEvents='none'
              />
              <image className='educationimgcss'
                href={Graduateicon}
                pointerEvents='none'
              />
              <image className='casesimgcss'
                href={Casesicon}
                pointerEvents='none'
              />
            </svg>
          </div>

        </div>
        <svg className={pop8}>
          <image 
            href={winningseats}
            pointerEvents='none'
          />
        </svg>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);