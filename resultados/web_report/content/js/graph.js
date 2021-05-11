/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 143.0, "minX": 0.0, "maxY": 1163.0, "series": [{"data": [[0.0, 143.0], [0.1, 143.0], [0.2, 143.0], [0.3, 143.0], [0.4, 143.0], [0.5, 143.0], [0.6, 143.0], [0.7, 143.0], [0.8, 143.0], [0.9, 143.0], [1.0, 143.0], [1.1, 143.0], [1.2, 143.0], [1.3, 143.0], [1.4, 145.0], [1.5, 145.0], [1.6, 145.0], [1.7, 145.0], [1.8, 145.0], [1.9, 145.0], [2.0, 145.0], [2.1, 145.0], [2.2, 145.0], [2.3, 145.0], [2.4, 145.0], [2.5, 145.0], [2.6, 145.0], [2.7, 146.0], [2.8, 146.0], [2.9, 146.0], [3.0, 146.0], [3.1, 146.0], [3.2, 146.0], [3.3, 146.0], [3.4, 146.0], [3.5, 146.0], [3.6, 146.0], [3.7, 146.0], [3.8, 146.0], [3.9, 146.0], [4.0, 147.0], [4.1, 147.0], [4.2, 147.0], [4.3, 147.0], [4.4, 147.0], [4.5, 147.0], [4.6, 147.0], [4.7, 147.0], [4.8, 147.0], [4.9, 147.0], [5.0, 147.0], [5.1, 147.0], [5.2, 147.0], [5.3, 148.0], [5.4, 148.0], [5.5, 148.0], [5.6, 148.0], [5.7, 148.0], [5.8, 148.0], [5.9, 148.0], [6.0, 148.0], [6.1, 148.0], [6.2, 148.0], [6.3, 148.0], [6.4, 148.0], [6.5, 148.0], [6.6, 148.0], [6.7, 148.0], [6.8, 148.0], [6.9, 148.0], [7.0, 148.0], [7.1, 148.0], [7.2, 148.0], [7.3, 148.0], [7.4, 148.0], [7.5, 148.0], [7.6, 148.0], [7.7, 148.0], [7.8, 148.0], [7.9, 148.0], [8.0, 148.0], [8.1, 148.0], [8.2, 148.0], [8.3, 148.0], [8.4, 148.0], [8.5, 148.0], [8.6, 148.0], [8.7, 148.0], [8.8, 148.0], [8.9, 148.0], [9.0, 148.0], [9.1, 148.0], [9.2, 148.0], [9.3, 149.0], [9.4, 149.0], [9.5, 149.0], [9.6, 149.0], [9.7, 149.0], [9.8, 149.0], [9.9, 149.0], [10.0, 149.0], [10.1, 149.0], [10.2, 149.0], [10.3, 149.0], [10.4, 149.0], [10.5, 149.0], [10.6, 149.0], [10.7, 149.0], [10.8, 149.0], [10.9, 149.0], [11.0, 149.0], [11.1, 149.0], [11.2, 149.0], [11.3, 149.0], [11.4, 149.0], [11.5, 149.0], [11.6, 149.0], [11.7, 149.0], [11.8, 149.0], [11.9, 149.0], [12.0, 149.0], [12.1, 149.0], [12.2, 149.0], [12.3, 149.0], [12.4, 149.0], [12.5, 149.0], [12.6, 149.0], [12.7, 149.0], [12.8, 149.0], [12.9, 149.0], [13.0, 149.0], [13.1, 149.0], [13.2, 150.0], [13.3, 150.0], [13.4, 150.0], [13.5, 150.0], [13.6, 150.0], [13.7, 150.0], [13.8, 150.0], [13.9, 150.0], [14.0, 150.0], [14.1, 150.0], [14.2, 150.0], [14.3, 150.0], [14.4, 150.0], [14.5, 152.0], [14.6, 152.0], [14.7, 152.0], [14.8, 152.0], [14.9, 152.0], [15.0, 152.0], [15.1, 152.0], [15.2, 152.0], [15.3, 152.0], [15.4, 152.0], [15.5, 152.0], [15.6, 152.0], [15.7, 152.0], [15.8, 152.0], [15.9, 152.0], [16.0, 152.0], [16.1, 152.0], [16.2, 152.0], [16.3, 152.0], [16.4, 152.0], [16.5, 152.0], [16.6, 152.0], [16.7, 152.0], [16.8, 152.0], [16.9, 152.0], [17.0, 152.0], [17.1, 152.0], [17.2, 154.0], [17.3, 154.0], [17.4, 154.0], [17.5, 154.0], [17.6, 154.0], [17.7, 154.0], [17.8, 154.0], [17.9, 154.0], [18.0, 154.0], [18.1, 154.0], [18.2, 154.0], [18.3, 154.0], [18.4, 154.0], [18.5, 156.0], [18.6, 156.0], [18.7, 156.0], [18.8, 156.0], [18.9, 156.0], [19.0, 156.0], [19.1, 156.0], [19.2, 156.0], [19.3, 156.0], [19.4, 156.0], [19.5, 156.0], [19.6, 156.0], [19.7, 156.0], [19.8, 167.0], [19.9, 167.0], [20.0, 167.0], [20.1, 167.0], [20.2, 167.0], [20.3, 167.0], [20.4, 167.0], [20.5, 167.0], [20.6, 167.0], [20.7, 167.0], [20.8, 167.0], [20.9, 167.0], [21.0, 167.0], [21.1, 182.0], [21.2, 182.0], [21.3, 182.0], [21.4, 182.0], [21.5, 182.0], [21.6, 182.0], [21.7, 182.0], [21.8, 182.0], [21.9, 182.0], [22.0, 182.0], [22.1, 182.0], [22.2, 182.0], [22.3, 182.0], [22.4, 183.0], [22.5, 183.0], [22.6, 183.0], [22.7, 183.0], [22.8, 183.0], [22.9, 183.0], [23.0, 183.0], [23.1, 183.0], [23.2, 183.0], [23.3, 183.0], [23.4, 183.0], [23.5, 183.0], [23.6, 183.0], [23.7, 188.0], [23.8, 188.0], [23.9, 188.0], [24.0, 188.0], [24.1, 188.0], [24.2, 188.0], [24.3, 188.0], [24.4, 188.0], [24.5, 188.0], [24.6, 188.0], [24.7, 188.0], [24.8, 188.0], [24.9, 188.0], [25.0, 188.0], [25.1, 195.0], [25.2, 195.0], [25.3, 195.0], [25.4, 195.0], [25.5, 195.0], [25.6, 195.0], [25.7, 195.0], [25.8, 195.0], [25.9, 195.0], [26.0, 195.0], [26.1, 195.0], [26.2, 195.0], [26.3, 195.0], [26.4, 196.0], [26.5, 196.0], [26.6, 196.0], [26.7, 196.0], [26.8, 196.0], [26.9, 196.0], [27.0, 196.0], [27.1, 196.0], [27.2, 196.0], [27.3, 196.0], [27.4, 196.0], [27.5, 196.0], [27.6, 196.0], [27.7, 201.0], [27.8, 201.0], [27.9, 201.0], [28.0, 201.0], [28.1, 201.0], [28.2, 201.0], [28.3, 201.0], [28.4, 201.0], [28.5, 201.0], [28.6, 201.0], [28.7, 201.0], [28.8, 201.0], [28.9, 201.0], [29.0, 204.0], [29.1, 204.0], [29.2, 204.0], [29.3, 204.0], [29.4, 204.0], [29.5, 204.0], [29.6, 204.0], [29.7, 204.0], [29.8, 204.0], [29.9, 204.0], [30.0, 204.0], [30.1, 204.0], [30.2, 204.0], [30.3, 205.0], [30.4, 205.0], [30.5, 205.0], [30.6, 205.0], [30.7, 205.0], [30.8, 205.0], [30.9, 205.0], [31.0, 205.0], [31.1, 205.0], [31.2, 205.0], [31.3, 205.0], [31.4, 205.0], [31.5, 205.0], [31.6, 217.0], [31.7, 217.0], [31.8, 217.0], [31.9, 217.0], [32.0, 217.0], [32.1, 217.0], [32.2, 217.0], [32.3, 217.0], [32.4, 217.0], [32.5, 217.0], [32.6, 217.0], [32.7, 217.0], [32.8, 217.0], [32.9, 225.0], [33.0, 225.0], [33.1, 225.0], [33.2, 225.0], [33.3, 225.0], [33.4, 225.0], [33.5, 225.0], [33.6, 225.0], [33.7, 225.0], [33.8, 225.0], [33.9, 225.0], [34.0, 225.0], [34.1, 225.0], [34.2, 225.0], [34.3, 232.0], [34.4, 232.0], [34.5, 232.0], [34.6, 232.0], [34.7, 232.0], [34.8, 232.0], [34.9, 232.0], [35.0, 232.0], [35.1, 232.0], [35.2, 232.0], [35.3, 232.0], [35.4, 232.0], [35.5, 232.0], [35.6, 242.0], [35.7, 242.0], [35.8, 242.0], [35.9, 242.0], [36.0, 242.0], [36.1, 242.0], [36.2, 242.0], [36.3, 242.0], [36.4, 242.0], [36.5, 242.0], [36.6, 242.0], [36.7, 242.0], [36.8, 242.0], [36.9, 252.0], [37.0, 252.0], [37.1, 252.0], [37.2, 252.0], [37.3, 252.0], [37.4, 252.0], [37.5, 252.0], [37.6, 252.0], [37.7, 252.0], [37.8, 252.0], [37.9, 252.0], [38.0, 252.0], [38.1, 252.0], [38.2, 258.0], [38.3, 258.0], [38.4, 258.0], [38.5, 258.0], [38.6, 258.0], [38.7, 258.0], [38.8, 258.0], [38.9, 258.0], [39.0, 258.0], [39.1, 258.0], [39.2, 258.0], [39.3, 258.0], [39.4, 258.0], [39.5, 260.0], [39.6, 260.0], [39.7, 260.0], [39.8, 260.0], [39.9, 260.0], [40.0, 260.0], [40.1, 260.0], [40.2, 260.0], [40.3, 260.0], [40.4, 260.0], [40.5, 260.0], [40.6, 260.0], [40.7, 260.0], [40.8, 261.0], [40.9, 261.0], [41.0, 261.0], [41.1, 261.0], [41.2, 261.0], [41.3, 261.0], [41.4, 261.0], [41.5, 261.0], [41.6, 261.0], [41.7, 261.0], [41.8, 261.0], [41.9, 261.0], [42.0, 261.0], [42.1, 261.0], [42.2, 266.0], [42.3, 266.0], [42.4, 266.0], [42.5, 266.0], [42.6, 266.0], [42.7, 266.0], [42.8, 266.0], [42.9, 266.0], [43.0, 266.0], [43.1, 266.0], [43.2, 266.0], [43.3, 266.0], [43.4, 266.0], [43.5, 270.0], [43.6, 270.0], [43.7, 270.0], [43.8, 270.0], [43.9, 270.0], [44.0, 270.0], [44.1, 270.0], [44.2, 270.0], [44.3, 270.0], [44.4, 270.0], [44.5, 270.0], [44.6, 270.0], [44.7, 270.0], [44.8, 279.0], [44.9, 279.0], [45.0, 279.0], [45.1, 279.0], [45.2, 279.0], [45.3, 279.0], [45.4, 279.0], [45.5, 279.0], [45.6, 279.0], [45.7, 279.0], [45.8, 279.0], [45.9, 279.0], [46.0, 279.0], [46.1, 304.0], [46.2, 304.0], [46.3, 304.0], [46.4, 304.0], [46.5, 304.0], [46.6, 304.0], [46.7, 304.0], [46.8, 304.0], [46.9, 304.0], [47.0, 304.0], [47.1, 304.0], [47.2, 304.0], [47.3, 304.0], [47.4, 309.0], [47.5, 309.0], [47.6, 309.0], [47.7, 309.0], [47.8, 309.0], [47.9, 309.0], [48.0, 309.0], [48.1, 309.0], [48.2, 309.0], [48.3, 309.0], [48.4, 309.0], [48.5, 309.0], [48.6, 309.0], [48.7, 311.0], [48.8, 311.0], [48.9, 311.0], [49.0, 311.0], [49.1, 311.0], [49.2, 311.0], [49.3, 311.0], [49.4, 311.0], [49.5, 311.0], [49.6, 311.0], [49.7, 311.0], [49.8, 311.0], [49.9, 311.0], [50.0, 311.0], [50.1, 316.0], [50.2, 316.0], [50.3, 316.0], [50.4, 316.0], [50.5, 316.0], [50.6, 316.0], [50.7, 316.0], [50.8, 316.0], [50.9, 316.0], [51.0, 316.0], [51.1, 316.0], [51.2, 316.0], [51.3, 316.0], [51.4, 318.0], [51.5, 318.0], [51.6, 318.0], [51.7, 318.0], [51.8, 318.0], [51.9, 318.0], [52.0, 318.0], [52.1, 318.0], [52.2, 318.0], [52.3, 318.0], [52.4, 318.0], [52.5, 318.0], [52.6, 318.0], [52.7, 321.0], [52.8, 321.0], [52.9, 321.0], [53.0, 321.0], [53.1, 321.0], [53.2, 321.0], [53.3, 321.0], [53.4, 321.0], [53.5, 321.0], [53.6, 321.0], [53.7, 321.0], [53.8, 321.0], [53.9, 321.0], [54.0, 322.0], [54.1, 322.0], [54.2, 322.0], [54.3, 322.0], [54.4, 322.0], [54.5, 322.0], [54.6, 322.0], [54.7, 322.0], [54.8, 322.0], [54.9, 322.0], [55.0, 322.0], [55.1, 322.0], [55.2, 322.0], [55.3, 330.0], [55.4, 330.0], [55.5, 330.0], [55.6, 330.0], [55.7, 330.0], [55.8, 330.0], [55.9, 330.0], [56.0, 330.0], [56.1, 330.0], [56.2, 330.0], [56.3, 330.0], [56.4, 330.0], [56.5, 330.0], [56.6, 334.0], [56.7, 334.0], [56.8, 334.0], [56.9, 334.0], [57.0, 334.0], [57.1, 334.0], [57.2, 334.0], [57.3, 334.0], [57.4, 334.0], [57.5, 334.0], [57.6, 334.0], [57.7, 334.0], [57.8, 334.0], [57.9, 341.0], [58.0, 341.0], [58.1, 341.0], [58.2, 341.0], [58.3, 341.0], [58.4, 341.0], [58.5, 341.0], [58.6, 341.0], [58.7, 341.0], [58.8, 341.0], [58.9, 341.0], [59.0, 341.0], [59.1, 341.0], [59.2, 341.0], [59.3, 345.0], [59.4, 345.0], [59.5, 345.0], [59.6, 345.0], [59.7, 345.0], [59.8, 345.0], [59.9, 345.0], [60.0, 345.0], [60.1, 345.0], [60.2, 345.0], [60.3, 345.0], [60.4, 345.0], [60.5, 345.0], [60.6, 346.0], [60.7, 346.0], [60.8, 346.0], [60.9, 346.0], [61.0, 346.0], [61.1, 346.0], [61.2, 346.0], [61.3, 346.0], [61.4, 346.0], [61.5, 346.0], [61.6, 346.0], [61.7, 346.0], [61.8, 346.0], [61.9, 348.0], [62.0, 348.0], [62.1, 348.0], [62.2, 348.0], [62.3, 348.0], [62.4, 348.0], [62.5, 348.0], [62.6, 348.0], [62.7, 348.0], [62.8, 348.0], [62.9, 348.0], [63.0, 348.0], [63.1, 348.0], [63.2, 351.0], [63.3, 351.0], [63.4, 351.0], [63.5, 351.0], [63.6, 351.0], [63.7, 351.0], [63.8, 351.0], [63.9, 351.0], [64.0, 351.0], [64.1, 351.0], [64.2, 351.0], [64.3, 351.0], [64.4, 351.0], [64.5, 358.0], [64.6, 358.0], [64.7, 358.0], [64.8, 358.0], [64.9, 358.0], [65.0, 358.0], [65.1, 358.0], [65.2, 358.0], [65.3, 358.0], [65.4, 358.0], [65.5, 358.0], [65.6, 358.0], [65.7, 358.0], [65.8, 359.0], [65.9, 359.0], [66.0, 359.0], [66.1, 359.0], [66.2, 359.0], [66.3, 359.0], [66.4, 359.0], [66.5, 359.0], [66.6, 359.0], [66.7, 359.0], [66.8, 359.0], [66.9, 359.0], [67.0, 359.0], [67.1, 359.0], [67.2, 360.0], [67.3, 360.0], [67.4, 360.0], [67.5, 360.0], [67.6, 360.0], [67.7, 360.0], [67.8, 360.0], [67.9, 360.0], [68.0, 360.0], [68.1, 360.0], [68.2, 360.0], [68.3, 360.0], [68.4, 360.0], [68.5, 365.0], [68.6, 365.0], [68.7, 365.0], [68.8, 365.0], [68.9, 365.0], [69.0, 365.0], [69.1, 365.0], [69.2, 365.0], [69.3, 365.0], [69.4, 365.0], [69.5, 365.0], [69.6, 365.0], [69.7, 365.0], [69.8, 365.0], [69.9, 365.0], [70.0, 365.0], [70.1, 365.0], [70.2, 365.0], [70.3, 365.0], [70.4, 365.0], [70.5, 365.0], [70.6, 365.0], [70.7, 365.0], [70.8, 365.0], [70.9, 365.0], [71.0, 365.0], [71.1, 366.0], [71.2, 366.0], [71.3, 366.0], [71.4, 366.0], [71.5, 366.0], [71.6, 366.0], [71.7, 366.0], [71.8, 366.0], [71.9, 366.0], [72.0, 366.0], [72.1, 366.0], [72.2, 366.0], [72.3, 366.0], [72.4, 373.0], [72.5, 373.0], [72.6, 373.0], [72.7, 373.0], [72.8, 373.0], [72.9, 373.0], [73.0, 373.0], [73.1, 373.0], [73.2, 373.0], [73.3, 373.0], [73.4, 373.0], [73.5, 373.0], [73.6, 373.0], [73.7, 374.0], [73.8, 374.0], [73.9, 374.0], [74.0, 374.0], [74.1, 374.0], [74.2, 374.0], [74.3, 374.0], [74.4, 374.0], [74.5, 374.0], [74.6, 374.0], [74.7, 374.0], [74.8, 374.0], [74.9, 374.0], [75.0, 374.0], [75.1, 374.0], [75.2, 374.0], [75.3, 374.0], [75.4, 374.0], [75.5, 374.0], [75.6, 374.0], [75.7, 374.0], [75.8, 374.0], [75.9, 374.0], [76.0, 374.0], [76.1, 374.0], [76.2, 374.0], [76.3, 374.0], [76.4, 374.0], [76.5, 374.0], [76.6, 374.0], [76.7, 374.0], [76.8, 374.0], [76.9, 374.0], [77.0, 374.0], [77.1, 374.0], [77.2, 374.0], [77.3, 374.0], [77.4, 374.0], [77.5, 374.0], [77.6, 374.0], [77.7, 408.0], [77.8, 408.0], [77.9, 408.0], [78.0, 408.0], [78.1, 408.0], [78.2, 408.0], [78.3, 408.0], [78.4, 408.0], [78.5, 408.0], [78.6, 408.0], [78.7, 408.0], [78.8, 408.0], [78.9, 408.0], [79.0, 410.0], [79.1, 410.0], [79.2, 410.0], [79.3, 410.0], [79.4, 410.0], [79.5, 410.0], [79.6, 410.0], [79.7, 410.0], [79.8, 410.0], [79.9, 410.0], [80.0, 410.0], [80.1, 410.0], [80.2, 410.0], [80.3, 451.0], [80.4, 451.0], [80.5, 451.0], [80.6, 451.0], [80.7, 451.0], [80.8, 451.0], [80.9, 451.0], [81.0, 451.0], [81.1, 451.0], [81.2, 451.0], [81.3, 451.0], [81.4, 451.0], [81.5, 451.0], [81.6, 454.0], [81.7, 454.0], [81.8, 454.0], [81.9, 454.0], [82.0, 454.0], [82.1, 454.0], [82.2, 454.0], [82.3, 454.0], [82.4, 454.0], [82.5, 454.0], [82.6, 454.0], [82.7, 454.0], [82.8, 454.0], [82.9, 482.0], [83.0, 482.0], [83.1, 482.0], [83.2, 482.0], [83.3, 482.0], [83.4, 482.0], [83.5, 482.0], [83.6, 482.0], [83.7, 482.0], [83.8, 482.0], [83.9, 482.0], [84.0, 482.0], [84.1, 482.0], [84.2, 482.0], [84.3, 505.0], [84.4, 505.0], [84.5, 505.0], [84.6, 505.0], [84.7, 505.0], [84.8, 505.0], [84.9, 505.0], [85.0, 505.0], [85.1, 505.0], [85.2, 505.0], [85.3, 505.0], [85.4, 505.0], [85.5, 505.0], [85.6, 517.0], [85.7, 517.0], [85.8, 517.0], [85.9, 517.0], [86.0, 517.0], [86.1, 517.0], [86.2, 517.0], [86.3, 517.0], [86.4, 517.0], [86.5, 517.0], [86.6, 517.0], [86.7, 517.0], [86.8, 517.0], [86.9, 527.0], [87.0, 527.0], [87.1, 527.0], [87.2, 527.0], [87.3, 527.0], [87.4, 527.0], [87.5, 527.0], [87.6, 527.0], [87.7, 527.0], [87.8, 527.0], [87.9, 527.0], [88.0, 527.0], [88.1, 527.0], [88.2, 538.0], [88.3, 538.0], [88.4, 538.0], [88.5, 538.0], [88.6, 538.0], [88.7, 538.0], [88.8, 538.0], [88.9, 538.0], [89.0, 538.0], [89.1, 538.0], [89.2, 538.0], [89.3, 538.0], [89.4, 538.0], [89.5, 562.0], [89.6, 562.0], [89.7, 562.0], [89.8, 562.0], [89.9, 562.0], [90.0, 562.0], [90.1, 562.0], [90.2, 562.0], [90.3, 562.0], [90.4, 562.0], [90.5, 562.0], [90.6, 562.0], [90.7, 562.0], [90.8, 573.0], [90.9, 573.0], [91.0, 573.0], [91.1, 573.0], [91.2, 573.0], [91.3, 573.0], [91.4, 573.0], [91.5, 573.0], [91.6, 573.0], [91.7, 573.0], [91.8, 573.0], [91.9, 573.0], [92.0, 573.0], [92.1, 573.0], [92.2, 576.0], [92.3, 576.0], [92.4, 576.0], [92.5, 576.0], [92.6, 576.0], [92.7, 576.0], [92.8, 576.0], [92.9, 576.0], [93.0, 576.0], [93.1, 576.0], [93.2, 576.0], [93.3, 576.0], [93.4, 576.0], [93.5, 580.0], [93.6, 580.0], [93.7, 580.0], [93.8, 580.0], [93.9, 580.0], [94.0, 580.0], [94.1, 580.0], [94.2, 580.0], [94.3, 580.0], [94.4, 580.0], [94.5, 580.0], [94.6, 580.0], [94.7, 580.0], [94.8, 642.0], [94.9, 642.0], [95.0, 642.0], [95.1, 642.0], [95.2, 642.0], [95.3, 642.0], [95.4, 642.0], [95.5, 642.0], [95.6, 642.0], [95.7, 642.0], [95.8, 642.0], [95.9, 642.0], [96.0, 642.0], [96.1, 981.0], [96.2, 981.0], [96.3, 981.0], [96.4, 981.0], [96.5, 981.0], [96.6, 981.0], [96.7, 981.0], [96.8, 981.0], [96.9, 981.0], [97.0, 981.0], [97.1, 981.0], [97.2, 981.0], [97.3, 981.0], [97.4, 1008.0], [97.5, 1008.0], [97.6, 1008.0], [97.7, 1008.0], [97.8, 1008.0], [97.9, 1008.0], [98.0, 1008.0], [98.1, 1008.0], [98.2, 1008.0], [98.3, 1008.0], [98.4, 1008.0], [98.5, 1008.0], [98.6, 1008.0], [98.7, 1163.0], [98.8, 1163.0], [98.9, 1163.0], [99.0, 1163.0], [99.1, 1163.0], [99.2, 1163.0], [99.3, 1163.0], [99.4, 1163.0], [99.5, 1163.0], [99.6, 1163.0], [99.7, 1163.0], [99.8, 1163.0], [99.9, 1163.0]], "isOverall": false, "label": "ViaCepWS JSON", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 24.0, "series": [{"data": [[1100.0, 1.0], [300.0, 24.0], [600.0, 1.0], [100.0, 21.0], [200.0, 14.0], [400.0, 5.0], [900.0, 1.0], [1000.0, 1.0], [500.0, 8.0]], "isOverall": false, "label": "ViaCepWS JSON", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 64.0, "series": [{"data": [[0.0, 64.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 12.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.62069144E12, "maxY": 3.0, "series": [{"data": [[1.6206915E12, 2.0], [1.62069144E12, 3.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6206915E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 183.0, "minX": 1.0, "maxY": 337.6891891891891, "series": [{"data": [[2.0, 183.0], [1.0, 188.0], [3.0, 337.6891891891891]], "isOverall": false, "label": "ViaCepWS JSON", "isController": false}, {"data": [[2.960526315789474, 333.6842105263157]], "isOverall": false, "label": "ViaCepWS JSON-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 6.75, "minX": 1.62069144E12, "maxY": 905.45, "series": [{"data": [[1.6206915E12, 36.7], [1.62069144E12, 905.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6206915E12, 6.75], [1.62069144E12, 164.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6206915E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 173.33333333333334, "minX": 1.62069144E12, "maxY": 340.27397260273966, "series": [{"data": [[1.6206915E12, 173.33333333333334], [1.62069144E12, 340.27397260273966]], "isOverall": false, "label": "ViaCepWS JSON", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6206915E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 173.33333333333334, "minX": 1.62069144E12, "maxY": 339.95890410958907, "series": [{"data": [[1.6206915E12, 173.33333333333334], [1.62069144E12, 339.95890410958907]], "isOverall": false, "label": "ViaCepWS JSON", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6206915E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.62069144E12, "maxY": 31.315068493150683, "series": [{"data": [[1.6206915E12, 0.0], [1.62069144E12, 31.315068493150683]], "isOverall": false, "label": "ViaCepWS JSON", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6206915E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 143.0, "minX": 1.62069144E12, "maxY": 1163.0, "series": [{"data": [[1.6206915E12, 188.0], [1.62069144E12, 1163.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6206915E12, 188.0], [1.62069144E12, 568.6000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6206915E12, 188.0], [1.62069144E12, 1163.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6206915E12, 188.0], [1.62069144E12, 743.699999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6206915E12, 149.0], [1.62069144E12, 143.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6206915E12, 183.0], [1.62069144E12, 318.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6206915E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 218.0, "minX": 1.0, "maxY": 326.0, "series": [{"data": [[2.0, 285.5], [1.0, 326.0], [3.0, 218.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 218.0, "minX": 1.0, "maxY": 326.0, "series": [{"data": [[2.0, 285.0], [1.0, 326.0], [3.0, 218.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.62069144E12, "maxY": 1.2333333333333334, "series": [{"data": [[1.6206915E12, 0.03333333333333333], [1.62069144E12, 1.2333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6206915E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.62069144E12, "maxY": 1.2166666666666666, "series": [{"data": [[1.6206915E12, 0.05], [1.62069144E12, 1.2166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6206915E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.62069144E12, "maxY": 1.2166666666666666, "series": [{"data": [[1.6206915E12, 0.05], [1.62069144E12, 1.2166666666666666]], "isOverall": false, "label": "ViaCepWS JSON-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6206915E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.62069144E12, "maxY": 1.2166666666666666, "series": [{"data": [[1.6206915E12, 0.05], [1.62069144E12, 1.2166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6206915E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

