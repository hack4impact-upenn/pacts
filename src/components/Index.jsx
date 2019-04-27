import React, { Component } from 'react';
import * as RB from 'react-bootstrap';

class Index extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
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
