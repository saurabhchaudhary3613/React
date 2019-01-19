import React from 'react';
import Aux from '../../hoc/ReactAux';

const layout = ( props ) => (
    <Aux>
        <div>
            Toolbar,
            SideDrawer,
            Backdrop
        </div>
        <main>
            {props.chldren}
        </main>
    </Aux>

);

export default layout;