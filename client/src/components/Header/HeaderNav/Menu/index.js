import React from 'react';
import MenuItem from './MenuItem';

export default props => {

    // const {items = [], cart} = props;
    const {items = []} = props;
    return (
        <ul className="navbar-nav ml-auto">
            {items.map(item => {
                    if(item.url === '/cart'){
                        return (
                            <MenuItem
                                item={item}
                                key={item.id}
                                //productCount = { cart ? cart.length : 0 }
                            />
                        );
                    }
                    return (
                        <MenuItem
                            item={item}
                            key={item.id}
                        />
                    );
            })}
        </ul>
    );
};
