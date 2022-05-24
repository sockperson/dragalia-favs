import React, { Component } from 'react';

import {getAdvs} from '../FileUtils';
import AdvPickButton from './AdvPickButton';
import OutsideClickHandler from './OutsideClickHandler';

class AdvDisplay extends Component {
    getBreak(index){
        if(index % 4 === 3){
            return <div></div>;
        }
    }

    render() {
        const advs = this.props.advs;

        return (
            <div className="mx-auto border justify-content-center">

                    <div className="row justify-content-center">
                        {advs.map((adv, index) => (
                            <React.Fragment key={adv}>
                                <div className="col-2 border bg-secondary" key={index}>
                                    <AdvPickButton key={adv} img={adv}
                                        element={this.props.element}
                                        weapon={this.props.weapon}
                                        handleAdvPick={this.props.handleAdvPick}
                                    />
                                </div>
                                {this.getBreak(index)}
                            </React.Fragment>
                        ))}
                    </div>
            </div>
        );
    }
}

export default AdvDisplay;