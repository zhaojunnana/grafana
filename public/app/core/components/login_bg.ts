import coreModule from 'app/core/core_module';
import * as d3 from 'd3';
import * as d3ScaleChromatic from 'd3-scale-chromatic';

function renderLoginBg() {
  let bodyNode: any = d3.select('body').node();
  let bounds = bodyNode.getBoundingClientRect();

  let svg = d3
    .select('body')
    .append('div')
    .classed('svg-container', true) //container class to make it responsive
    .append('svg')
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', '0 0 ' + bounds.width + ' ' + bounds.height);

  let cardsData = [];

  let randY = 0;
  let randX = 0;
  let xCellCount = 40;
  let yCellCount = 70;
  let cellWidth = bounds.width / xCellCount;
  let cellHeight = bounds.height / yCellCount;

  for (let x = 0; x < xCellCount; x++) {
    randX = Math.max(0, randX + Math.random() - 0.5);
    for (let y = 0; y < yCellCount; y++) {
      randY = Math.max(0, randY + Math.random() - 0.5);
      cardsData.push({
        x: x,
        y: y,
        value: randX + randY,
      });
    }
  }

  let colorInterpolator = d3ScaleChromatic.interpolateRdPu;
  let colorScale = d3.scaleSequential(colorInterpolator).domain([100, 0]);

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
    .style('stroke', getCardColor)
    .style('stroke-width', 0)
    .style('opacity', 1);
}

export function loginBg() {
  return {
    restrict: 'A',
    link: function(elem) {
      setTimeout(renderLoginBg, 100);
    },
  };
}

coreModule.directive('loginBg', loginBg);
