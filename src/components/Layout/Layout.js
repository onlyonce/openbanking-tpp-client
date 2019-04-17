import React, { Fragment, PureComponent } from 'react';
import { ToolbarButton, Page, Toolbar, Card, Icon } from "react-onsenui";
import { connect } from 'react-redux';
import { logout } from '../../store/users/thunks';
import { NavLink, withRouter } from 'react-router-dom';

class Layout extends PureComponent {

    render() {
        const {role, fullname, logout, history} = this.props;
        const isCustomer = role==='customer';
        const isMerchant = role==='merchant';

        return (<Page renderToolbar={() => <Toolbar modifier={'material'}>

            <div className="center">{role?<Fragment>
                <NavLink to={`/${role}`}>
                    <ToolbarButton modifier={'material'}>
                        <Icon icon={isCustomer?'fa-user-circle':'fa-building'}/> { fullname }
                    </ToolbarButton>
                </NavLink>
            </Fragment>: 'You are not logged in.'}</div>
            {role&&<div className="right">
                {isCustomer&& <NavLink to={`/${role}/readPaymentRequest`}><ToolbarButton modifier={'material'}><Icon icon={'fa-qrcode'} /></ToolbarButton></NavLink>}
                {isCustomer&& <NavLink to={`/${role}/createPaymentRequest`}><ToolbarButton modifier={'material'}><Icon icon={'fa-money-bill'} /></ToolbarButton></NavLink>}
                {isMerchant&&<NavLink to={`/${role}/createPaymentRequest`}><ToolbarButton modifier={'material'}><Icon icon={'fa-money-check-alt'} /></ToolbarButton></NavLink>}
                <ToolbarButton onClick={()=>logout(history)} modifier={'material'}><Icon icon={'fa-sign-out-alt'}/></ToolbarButton>
            </div>}

        </Toolbar>}
        >
            <Card modifier={'material'} style={{  textAlign: 'center'}}>
            {this.props.children}
            </Card>
        </Page>)
    }

}

export default withRouter(connect(state=>({fullname: state.user.fullname, role: state.user.role}), dispatch=>({logout:(history)=>dispatch(logout(history))}))(Layout));
