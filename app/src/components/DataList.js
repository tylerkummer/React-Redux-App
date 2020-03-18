import React from 'react';
import { connect } from 'react-redux';

const DataList = props => {
    return (
        <>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                    props.data.map( item => <div key={item.id}>{item.name}</div>)
                )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(DataList);