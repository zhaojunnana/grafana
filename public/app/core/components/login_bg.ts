import coreModule from 'app/core/core_module';
import * as d3 from 'd3';
import * as d3ScaleChromatic from 'd3-scale-chromatic';

const xCellCount = 30;
const yCellCount = 70;
const colorScaleMax = 100;

let cardsData = [];

function updateCards(offset: number) {
  let randY = 0;
  let randX = 0;

  cardsData = [];

  for (let x = 0; x < xCellCount; x++) {
    let angle = (x-(offset*2)) / (xCellCount / 3) * 90;
    let angleRad = angle * (Math.PI / 180);

    randX = Math.sin(angleRad) * 180 / Math.PI;

    for (let y = 0; y < yCellCount; y++) {
      // randY = Math.sin((y % (yCellCount/5)) * (Math.PI/180)) * colorScaleMax;
      cardsData.push({x: x, y: y, value: randX + randY});
    }
  }
}

function renderLoginBg() {
  let bodyNode: any = d3.select('body').node();
  let bounds = bodyNode.getBoundingClientRect();
  let width = bounds.width - 20;
  let height = bounds.height - 20;
  const cellWidth = width / xCellCount;
  const cellHeight = height / yCellCount;

  let svg = d3
  .select('body')
  .append('div')
  .classed('svg-container', true) //container class to make it responsive
  .append('svg')
  .attr('preserveAspectRatio', 'xMinYMin meet')
  .attr('viewBox', '0 0 ' + width + ' ' + height);

  let colorInterpolator = d3ScaleChromatic.interpolateRdPu;
  let colorScale = d3.scaleSequential(colorInterpolator).domain([colorScaleMax, 0]);

  updateCards(-30);

  let getCardColor: any = function(d) {
    return colorScale(d.value);
  };

  let cards = svg.selectAll('.heatmap-card').data(cardsData);
  cards
  .enter()
  .append('rect')
  .attr('x', d => {
    return d.x * cellWidth;
  })
  .attr('width', d => {
    return cellWidth - 4;
  })
  .attr('y', d => {
    return d.y * cellHeight;
  })
  .attr('height', h => {
    return cellHeight - 4;
  })
  .attr('rx', 1)
  .attr('ry', 1)
  .attr('class', 'bordered heatmap-card')
  .style('fill', getCardColor)
  .style('stroke-width', 0)
  .style('opacity', 1);

  console.log('initial render');

  let animationCounter = 1;
  let animationTimer = setInterval(() => {

    updateCards(animationCounter);

    let cards = svg.selectAll('.heatmap-card').data(cardsData);
    cards
      .transition()
      .style('fill', getCardColor);
    animationCounter += 2;

  }, 100);

  setTimeout(() => {
    clearTimeout(animationTimer);
  }, 1000);
}

export function loginBg() {
  return {
    restrict: 'A',
    link: function(elem) {
      renderLoginBg();
    },
  };
}

coreModule.directive('loginBg', loginBg);
