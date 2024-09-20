import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRNTrmeDke6grCJcH25n7pqSPew9SyEjCXVmE28aBo-9BgCrDDQj5GmzAzZv_eNXs8cO_Mm3t-Hd12Q/pub?gid=0&single=true&output=csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.xvalue = +d.xvalue;
      d.yvalue = +d.yvalue;
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
