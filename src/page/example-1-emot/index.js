import React from 'react';
import { select, arc} from 'd3';
import './index.css';

class EmotSVG extends React.Component {
    constructor(props) {
        super(props);
        this.refSvgDom = React.createRef();
        this.emotStyle = {
            emotWidth: 900,
            emotHeight: 500
        }
    }
    componentDidMount() {
        this.svg = select(this.refSvgDom.current);
        this.draw();
    }
    draw () {
        const { emotWidth, emotHeight } = this.emotStyle;
        const emotContiner = this.svg.append('g')
            .attr('transfrom', `translate(${emotWidth / 2}, ${emotHeight / 2})`);

        emotContiner.append('circle')
            .attr('r', 160)
            .attr('cx', emotWidth / 2).attr('cy', emotHeight / 2)
            .attr('fill', 'yellow')
            .attr('stroke', 'black');

        emotContiner.append('circle').attr('r', 30)
            .attr('cx', emotWidth / 2 - 70)
            .attr('cy', emotHeight / 2.5)
            .attr('fill', 'black');

        emotContiner.append('circle').attr('r', 30).attr('cx', emotWidth / 2 + 70).attr('cy', emotHeight / 2.5)
            .attr('fill', 'black');

        emotContiner.append('circle').attr('r', 10).attr('cx', emotWidth / 2 - 70).attr('cy', emotHeight / 2.5 + 4)
            .attr('fill', 'white');

        emotContiner.append('circle').attr('r', 10).attr('cx', emotWidth / 2 + 70).attr('cy', emotHeight / 2.5 + 4)
            .attr('fill', 'white');

        emotContiner.append('rect').attr('x',emotWidth / 2 - 110).attr('y',emotHeight / 3.3).attr('width', '80').attr('height', '10').attr('fill', 'black')
            .attr('class', 'eyebrow')
            .transition().duration(2000).attr('y', emotHeight / 3.3 - 10);
        emotContiner.append('rect').attr('x',emotWidth / 2 + 30).attr('y',emotHeight / 3.3).attr('width', '80').attr('height', '10').attr('fill', 'black')
            .attr('class', 'eyebrow')    
            .transition().duration(2000).attr('y', emotHeight / 3.3 - 10);
        
        const mouth = emotContiner.append('g').attr('transform', `translate(${emotWidth / 2}, ${emotHeight / 2})`);
        mouth.append('path').attr('d', arc()({
          innerRadius: 100,
          outerRadius: 114,
          startAngle: Math.PI / 2,
          endAngle: Math.PI * 3 / 2
        }));
    }
    render() {
        const { emotWidth, emotHeight } = this.emotStyle;
        return (
            <div className="example-emot">
                <svg  ref={this.refSvgDom} width={emotWidth} height={emotHeight} ></svg>
            </div>
        );
    }
}

export default EmotSVG;