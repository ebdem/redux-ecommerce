import React, { Component } from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import CategoryList from '../categories/CategoryList';
import ProductList from '../products/ProductList';


export default class Dashboard extends Component {
    render() {
        return (
            <Grid>
                <GridRow>
                    <GridColumn width={6} style={{paddingLeft:'50px'}}>
                        <CategoryList/>
                    </GridColumn>
                    <GridColumn width={10}>
                        <ProductList/>
                    </GridColumn>

                </GridRow>
    
            </Grid>
        )
    }
}
