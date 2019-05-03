import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import axios from 'axios'

class Index extends Component {

    constructor(props, context) {
        console.log('bananas');
        super(props, context);
    }

    componentDidMount() {
      axios.get('/api/test').then(function(res) {
        console.log(res.data);
      });
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
