import React, { Component } from 'react';
import * as RB from 'react-bootstrap';

class Index extends Component {

    constructor(props, context) {
        console.log('bananas');
        super(props, context);
    }

    render() {
        const {
          testThing
        } = this.props;
        
        return (
            <div>
                <RB.Grid>
                    <RB.Row>
                        <RB.Col xs={4} md={2} />
                        <RB.Col xs={12} md={8}>
                            <RB.PageHeader>
                                PACTS
                                <br />
                                <small>
                                    by Hack4Impact
                                </small>
                            </RB.PageHeader>
                        </RB.Col>
                        <RB.Button className="move-right" onClick={() => testThing()}>touch me</RB.Button>
                        <RB.Col xs={4} md={2} />
                    </RB.Row>
                    <RB.Row>
                        Map will be here
                    </RB.Row>
                </RB.Grid>
            </div>
        )
    }

}

export default Index;
