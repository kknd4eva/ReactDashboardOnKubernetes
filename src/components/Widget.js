import React from 'react';
import { Sparklines, SparklinesBars, SparklinesLine } from 'react-sparklines';
import './Widget.css'

function Widget(props) {
  return (
    <div class="container-fluid">  
      <div class="dashboard-widget">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div class="stats">
              <div class="stat">
                  <span class="stat-value">{props.value}</span>
                  <span class="stat-label">{props.label}</span>
              </div>
          </div>
          <div class="sparkline">
          <Sparklines data={props.chartRange}>
            <SparklinesBars style={{ fill: "white" }} />
            <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
          </Sparklines>
          </div>
      </div>  
    </div>
  );
}

export default Widget;
