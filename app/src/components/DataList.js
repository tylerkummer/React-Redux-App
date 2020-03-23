import React from 'react';
import { connect } from 'react-redux';

const DataList = props => {
    console.log("Data List: ", props.data)
    return (
        <>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (   props.data.cards &&
                    props.data.cards.map( item => <div key={item.id}>{item.name}</div>)
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